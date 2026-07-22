/*
  Representa un proyecto dentro del dominio.
  Las fechas se representan como cadenas y el dominio espera
  que contengan instantes en formato ISO 8601 en UTC.
*/
export type Project = {
  readonly id: string
  readonly name: string
  readonly createdAt: string
  readonly updatedAt: string
}

/*
  Representa el resultado de la validación de un nombre de proyecto.
  Si la validación es exitosa, se devuelve el nombre normalizado.
  Si la validación falla, se devuelve un error indicando la razón.
*/
export type ProjectNameValidationResult =
  | { readonly success: true; readonly value: string }
  | { readonly success: false; readonly error: 'empty-name' | 'name-too-long' }

/**
  Datos necesarios para crear un Project.

  El dominio recibe la identidad y el instante desde el exterior:
  No genera UUID ni consulta directamente el reloj del sistema.
*/
export type CreateProjectInput = {
  readonly id: string
  readonly name: string
  readonly now: string
}

/*
  La creacion puede producir un Project valido o uno de los errores
  definidos para el nombre
*/
export type CreateProjectResult =
  | { readonly success: true; readonly value: Project }
  | { readonly success: false; readonly error: 'empty-name' | 'name-too-long' }

/*
  Cantidad máxima de caracteres permitidos para el nombre de un
  proyecto.
*/
export const PROJECT_NAME_MAX_LENGTH = 100

/*
 Normaliza el nombre de un proyecto, eliminando espacios en blanco y
 reemplazando múltiples espacios consecutivos por uno solo.
*/
export function normalizeProjectName(name: string): string {
  return name.trim().replace(/\s+/g, ' ')
}

/*
  Valida el nombre de un proyecto despues de normalizarlo.
  Retorna el nombre normalizado si es valido o un error si no lo es.
*/
export function validateProjectName(name: string): ProjectNameValidationResult {
  const normalizedName = normalizeProjectName(name)
  // Valida que el nombre no este vacio.
  if (normalizedName.length === 0) {
    return {
      success: false,
      error: 'empty-name',
    }
  }

  // Valida que el nombre no supere la longitud maxima permitida.
  if (normalizedName.length > PROJECT_NAME_MAX_LENGTH) {
    return {
      success: false,
      error: 'name-too-long',
    }
  }

  return {
    success: true,
    value: normalizedName,
  }
}

export function createProject(input: CreateProjectInput): CreateProjectResult {
  const nameValidation = validateProjectName(input.name)

  if (!nameValidation.success) {
    return {
      success: false,
      error: nameValidation.error,
    }
  }

  const project: Project = {
    id: input.id,
    name: nameValidation.value,
    createdAt: input.now,
    updatedAt: input.now,
  }

  return {
    success: true,
    value: project,
  }
}
