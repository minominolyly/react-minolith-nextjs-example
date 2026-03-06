"use client";

import defaulTheme from "@/themes/default.theme";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { useServerInsertedHTML } from "next/navigation";
import { PropsWithChildren, useRef, useState } from "react";
import { minolithStyleUtility } from "react-minolith";

function MinolithConfigurationRegistry(props: PropsWithChildren) {
  const isServerInserted = useRef(false);

  const [minolithStyles] = useState(
    minolithStyleUtility.getMinolithCssVariableStyles(defaulTheme),
  );

  useServerInsertedHTML(() => {
    if (!isServerInserted.current) {
      isServerInserted.current = true;
      return (
        <style
          id={"minolith-custom-css-variables"}
          key={"minolith-custom-css-variables"}
          dangerouslySetInnerHTML={{
            __html: minolithStyles,
          }}
        />
      );
    }
  });

  return <>{props.children}</>;
}

function EmotionCacheRegistry(props: PropsWithChildren) {
  const [registry] = useState(() => {
    const cache = createCache({ key: "minolith" });
    cache.compat = true;

    const prevInsert = cache.insert;
    let inserted: { name: string; isGlobal: boolean }[] = [];

    cache.insert = (...args) => {
      const [selector, serialized] = args;
      if (cache.inserted[serialized.name] === undefined) {
        inserted.push({
          name: serialized.name,
          isGlobal: !selector,
        });
      }
      return prevInsert(...args);
    };

    const flush = () => {
      const prevInserted = inserted;
      inserted = [];
      return prevInserted;
    };

    return { cache, flush };
  });

  useServerInsertedHTML(() => {
    const inserted = registry.flush();
    if (inserted.length === 0) {
      return null;
    }

    let styles = "";
    let dataEmotionAttribute = registry.cache.key;

    const globals: {
      name: string;
      style: string;
    }[] = [];

    inserted.forEach(({ name, isGlobal }) => {
      const style = registry.cache.inserted[name];

      if (typeof style === "string") {
        if (isGlobal) {
          globals.push({ name, style });
        } else {
          styles += style;
          dataEmotionAttribute += ` ${name}`;
        }
      }
    });

    return (
      <>
        {globals.map(({ name, style }) => (
          <style
            key={name}
            data-emotion={`${registry.cache.key}-global ${name}`}
            dangerouslySetInnerHTML={{ __html: style }}
          />
        ))}
        {styles && (
          <style
            data-emotion={dataEmotionAttribute}
            dangerouslySetInnerHTML={{ __html: styles }}
          />
        )}
      </>
    );
  });

  return <CacheProvider value={registry.cache}>{props.children}</CacheProvider>;
}

export default function Registry(props: PropsWithChildren) {
  return (
    <EmotionCacheRegistry>
      <MinolithConfigurationRegistry>
        {props.children}
      </MinolithConfigurationRegistry>
    </EmotionCacheRegistry>
  );
}
