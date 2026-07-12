import type { CityContent, DepartmentContent, GuideContent, ServiceContent } from "./types";

import { carbureValeureRachat } from "./guides/carbure-tungstene-valeur-rachat";
import { ferrailleLegereVsLourde } from "./guides/ferraille-legere-vs-lourde";
import { preparerSaFerrailleDepot } from "./guides/preparer-sa-ferraille-depot";
import { prixCuivreCoursOfficiel } from "./guides/prix-cuivre-cours-officiel";
import { virementInstantaneLoi } from "./guides/virement-instantane-achat-metaux-loi";

import { deposeDeBennes } from "./services/depose-de-bennes";
import { enlèvementChantier } from "./services/enlevement-chantier";
import { rachatDeMetaux } from "./services/rachat-de-metaux";
import { recyclageFerrailles } from "./services/recyclage-ferrailles";
import { recyclageMetauxNonFerreux } from "./services/recyclage-metaux-non-ferreux";
import { recyclageMetauxSpeciaux } from "./services/recyclage-metaux-speciaux";

import { attainville } from "./cities/attainville";
import { asnieresSurOise } from "./cities/asnieres-sur-oise";
import { bailletEnFrance } from "./cities/baillet-en-france";
import { belloyEnFrance } from "./cities/belloy-en-france";
import { chaumontel } from "./cities/chaumontel";
import { domont } from "./cities/domont";
import { ezanville } from "./cities/ezanville";
import { fosses } from "./cities/fosses";
import { luzarches } from "./cities/luzarches";
import { maffliers } from "./cities/maffliers";
import { marlyLaVille } from "./cities/marly-la-ville";
import { montsoult } from "./cities/montsoult";
import { presles } from "./cities/presles";
import { saintMartinDuTertre } from "./cities/saint-martin-du-tertre";
import { survilliers } from "./cities/survilliers";
import { viarmes } from "./cities/viarmes";

import { essonne91 } from "./departments/essonne-91";
import { hautsDeSeine92 } from "./departments/hauts-de-seine-92";
import { seineSaintDenis93 } from "./departments/seine-saint-denis-93";
import { seineEtMarne77 } from "./departments/seine-et-marne-77";
import { valDoise95 } from "./departments/val-doise-95";
import { valDeMarne94 } from "./departments/val-de-marne-94";
import { yvelines78 } from "./departments/yvelines-78";

export const ALL_CITIES: CityContent[] = [
  // Phase 1 — cœur de zone
  viarmes,
  belloyEnFrance,
  montsoult,
  bailletEnFrance,
  domont,
  luzarches,
  presles,
  // Phase 2 — second cercle
  maffliers,
  saintMartinDuTertre,
  attainville,
  fosses,
  chaumontel,
  // Phase 3 — extension nord-est
  marlyLaVille,
  asnieresSurOise,
  survilliers,
  ezanville,
];

// Départements proches du dépôt — affichés dans la navigation principale
export const NEARBY_DEPARTMENTS: DepartmentContent[] = [
  valDoise95,
  hautsDeSeine92,
  yvelines78,
  seineSaintDenis93,
];

// Grande couronne IDF — pages indexées, hors navigation principale
export const EXTENDED_DEPARTMENTS: DepartmentContent[] = [
  valDeMarne94,
  essonne91,
  seineEtMarne77,
];

export const ALL_DEPARTMENTS: DepartmentContent[] = [
  ...NEARBY_DEPARTMENTS,
  ...EXTENDED_DEPARTMENTS,
];

export const ALL_SERVICES: ServiceContent[] = [
  rachatDeMetaux,
  recyclageFerrailles,
  recyclageMetauxNonFerreux,
  recyclageMetauxSpeciaux,
  enlèvementChantier,
  deposeDeBennes,
];

export function getServiceBySlug(slug: string): ServiceContent | undefined {
  return ALL_SERVICES.find((s) => s.slug === slug);
}

export const ALL_GUIDES: GuideContent[] = [
  prixCuivreCoursOfficiel,
  preparerSaFerrailleDepot,
  ferrailleLegereVsLourde,
  carbureValeureRachat,
  virementInstantaneLoi,
];

export function getGuideBySlug(slug: string): GuideContent | undefined {
  return ALL_GUIDES.find((g) => g.slug === slug);
}

export function getCityBySlug(slug: string): CityContent | undefined {
  return ALL_CITIES.find((city) => city.slug === slug);
}

export function getDepartmentBySlug(
  slug: string,
): DepartmentContent | undefined {
  return ALL_DEPARTMENTS.find((dept) => dept.slug === slug);
}

export function getCitiesByDepartmentSlug(
  departmentSlug: string,
): CityContent[] {
  return ALL_CITIES.filter(
    (city) => city.departementSlug === departmentSlug,
  );
}

export function getCitiesByPhase(phase: 1 | 2 | 3): CityContent[] {
  return ALL_CITIES.filter((city) => city.phase === phase);
}
