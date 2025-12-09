import { NextRequest, NextResponse } from "next/server";
import { aiChat } from "@/app/actions/aichat";


export async function POST(req: NextRequest) {
  const { message } = await req.json();
  const result = await aiChat(message);
  return NextResponse.json(result);
}