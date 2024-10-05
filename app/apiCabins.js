import supabase from "./_lib/supabase";

export async function getCabins() {
  const { data: cabins, error } = await supabase.from("cabins").select("*");
  if (error) {
    console.error(error);
    throw new Error("cabins couldn't be loaded");
  }
  return cabins;
}
