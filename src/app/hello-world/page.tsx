import HelloWorld from "@/components/HelloWorld";
import { Metadata } from "next";

const TITLE = "Hello, World!";
const DESCRIPTION = "Hello, World!";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
};

export default function HelloWorldPage() {
  return <HelloWorld />;
}
