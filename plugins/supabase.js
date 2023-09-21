import { createClient } from "@supabase/supabase-js";

const projectUrl = "https://jmdhsmedgggrskreueus.supabase.co"; 
const anonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImptZGhzbWVkZ2dncnNrcmV1ZXVzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTUyOTU2NTEsImV4cCI6MjAxMDg3MTY1MX0.mZdavRPY4VlVau7HvJRG_PhvJ4MdVcqyl6dwLiT88OE";
const supabase = createClient(projectUrl, anonKey);

export default function (app, inject) {
  inject("supabase", supabase);
}