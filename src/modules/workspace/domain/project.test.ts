import { describe, expect, it } from 'vitest'

import {
  createProject,
  normalizeProjectName,
  PROJECT_NAME_MAX_LENGTH,
  validateProjectName,
} from './project'

/*
  Agrupa las pruebas relacionadas con la normalizacion de
  nombres de proyectos.
*/
describe('normalizeProjectName', () => {
  // Comprueba que se eliminen los espacios ubicados al inicio y al final.
  it('removes surrounding whitespace', () => {
    expect(normalizeProjectName('  CanvasFlow  ')).toBe('CanvasFlow')
  })

  // Comprueba que se reemplacen los espacios internos consecutivos por un solo espacio.
  it('replaces consecutive internal whitespace with a single space', () => {
    expect(normalizeProjectName('My  project\tuniversity')).toBe('My project university')
  })
})

/*
  Agrupa las pruebas relacionadas con la validacion de
  nombres de proyectos.
*/
describe('validateProjectName', () => {
  // Comprueba que un nombre formado solamente por espacios sea considerado vacio.
  it('rejects a name containing only whitespace', () => {
    expect(validateProjectName('   ')).toEqual({
      success: false,
      error: 'empty-name',
    })
  })

  // Comprueba que un nombre que supere la longitud maxima permitida sea rechazado.
  it('rejects a name longer than the maximum length', () => {
    const name = 'a'.repeat(PROJECT_NAME_MAX_LENGTH + 1)

    expect(validateProjectName(name)).toEqual({
      success: false,
      error: 'name-too-long',
    })
  })

  // Retorna el nombre normalizado cuando este sea valido.
  it('returns the normalized name when it is valid', () => {
    expect(validateProjectName('  My  project  ')).toEqual({
      success: true,
      value: 'My project',
    })
  })

  // Acepta un nombre con exactamente la longitud maxima permitida.
  it('accepts a name with exactly the maximum length', () => {
    const name = 'a'.repeat(PROJECT_NAME_MAX_LENGTH)

    expect(validateProjectName(name)).toEqual({
      success: true,
      value: name,
    })
  })
})

describe('createProject', () => {
  it('rejects creation when the name is invalid', () => {
    const result = createProject({
      id: 'project-123',
      name: '   ',
      now: '2026-07-22T03:00:00.000Z',
    })

    expect(result).toEqual({
      success: false,
      error: 'empty-name',
    })
  })

  it('creates a project with normalized data', () => {
    const result = createProject({
      id: 'project-123',
      name: '  My  project  ',
      now: '2026-07-22T03:00:00.000Z',
    })

    expect(result).toEqual({
      success: true,
      value: {
        id: 'project-123',
        name: 'My project',
        createdAt: '2026-07-22T03:00:00.000Z',
        updatedAt: '2026-07-22T03:00:00.000Z',
      },
    })
  })
})
