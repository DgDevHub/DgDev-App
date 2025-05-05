// src/app/api/repos/route.ts
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const owner = searchParams.get("owner");
  const repo = searchParams.get("repo");

  const token = process.env.GITHUB_TOKEN;

  if (!owner || !repo) {
    return NextResponse.json({ error: "Parâmetros faltando." }, { status: 400 });
  }

  if (!token) {
    return NextResponse.json({ error: "Token do GitHub não configurado." }, { status: 500 });
  }

  try {
    const response = await fetch(`https://api.github.com/repos/${owner}/${repo}`, {
      headers: {
        Authorization: `token ${token}`,
        Accept: "application/vnd.github.v3+json",
      },
    });

    if (!response.ok) {
      return NextResponse.json({ error: response.statusText }, { status: response.status });
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
