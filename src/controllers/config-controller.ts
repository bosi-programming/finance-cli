import { Config, configRepository } from "../models"
import { resetColor, textoVermelho } from "../constants"

export abstract class ConfigController {
  private static model = configRepository;

  public static async get() {
    const config = await this.model.find();
    if (config.length > 1) {
      console.error(`${textoVermelho}There is more than one config, please remove any extra config and try again.${resetColor}`)
      return;
    }
    if (config.length === 0) {
      console.error(`${textoVermelho}There no config, please create a config and try again.${resetColor}`)
      return;
    }
    return config;
  }

  public static async create(props: Omit<Config, 'id'>) {
    this.model.create(props);
  }
}
