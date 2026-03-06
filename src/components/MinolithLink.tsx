"use client";

import Link from "next/link";
import { Link as MinoLink, LinkProps } from "react-minolith";

export default function MinolithLink(props: LinkProps) {
  return (<MinoLink as={Link} {...props} />)
}
