import { NextRequest, NextResponse } from "next/server";

type MemberModel = unknown;

export async function GET(request: NextRequest) {
  // Query Parameters (e.g. `/api/members?gender=Male`)
  const searchParams = request.nextUrl.searchParams;
  const gender = searchParams.get("gender") ?? undefined;
  const country = searchParams.get("country") ?? undefined;
  const yearJoined = searchParams.get("yearJoined") ?? undefined;
  const roleType = searchParams.get("roleType") ?? undefined;
  const voyageRole = searchParams.get("voyageRole") ?? undefined;
  const soloTier = searchParams.get("soloTier") ?? undefined;
  const voyageTier = searchParams.get("voyageTier") ?? undefined;
  const voyage = searchParams.get("voyage") ?? undefined;
  const query = {
    gender,
    country,
    yearJoined,
    roleType,
    voyageRole,
    soloTier,
    voyageTier,
    voyage,
  };
  const members: MemberModel[] = [];

  return NextResponse.json({
    members,
    query,
  });
}
