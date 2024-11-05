import { Planet } from '../dto/planet.dto'
import { PlanetSpain } from '../dto/planetSpain.dto'

export class PlanetMapper {
  public getPlanetMapper(planet: Planet): PlanetSpain {
    const newPlanet = this.translateAttributes(planet)

    return <PlanetSpain>newPlanet
  }

  private attributeEquivalence: { [key: string]: string } = {
    name: 'nombre',
    rotation_period: 'periodo_de_rotacion',
    orbital_period: 'periodo_orbital',
    diameter: 'diametro',
    climate: 'clima',
    gravity: 'gravedad',
    terrain: 'terreno',
    surface_water: 'superficie_acuatica',
    population: 'poblacion',
    residents: 'residentes',
    films: 'peliculas',
    created: 'creado',
    edited: 'editado',
    url: 'url',
  }

  private translateAttributes(json: { [key: string]: any }): {
    [key: string]: any
  } {
    const translatedJson: { [key: string]: any } = {}
    for (const key in json) {
      if (this.attributeEquivalence.hasOwnProperty(key)) {
        translatedJson[this.attributeEquivalence[key]] = json[key]
      } else {
        translatedJson[key] = json[key]
      }
    }
    return translatedJson
  }
}
