import { resetColor, textoVermelho } from "./constants"
import { Config } from "./models"

export const calculate = async () => {
  const config = await Config.findAll();
  if (config.length !== 1) {
    console.error(`${textoVermelho}There is more than one config, please remove any extra config and try again.${resetColor}`)
    return;
  }
  const isCorrectValues = totalLazer + totalInvestimentos === 1

  if (!isCorrectValues) {
    console.error(`${textoVermelho}Os valores de investimentos e lazer devem somar 100%, mas somam ${totalLazer + totalInvestimentos}${resetColor}`)
  }

  const salario = Number(process.argv[2])

  if (!salario || isNaN(salario)) {
    console.error(`${textoVermelho}Informe o salário!${resetColor}`)
    return;
  }

  const quinzenaDoMes = new Date().getDate() < 15 ? 1 : 2

  const contas = quinzenaDoMes === 1 ? contasQuinzenal1 : contasQuinzenal2

  const totalDespesas = Object.values(contas).reduce((acc, curr) => acc + curr, 0)
  const salarioLiquido = salario - totalDespesas

  const investimentosArray = Object.entries(investimentos).map(([key, value]) => {
    return [key, salarioLiquido * value]
  })
  const investimentosObj = Object.fromEntries(investimentosArray)

  const lazerArray = Object.entries(lazer).map(([key, value]) => {
    return [key, salarioLiquido * value]
  })
  const lazerObj = Object.fromEntries(lazerArray)

  console.table({
    'Salário total': salario,
    'Salário liquido': salarioLiquido,
    totalDespesas,
    '-------': '-------',
    ...contas,
    '---------': '---------',
    ...investimentosObj,
    '--------': '--------',
    ...lazerObj,
  })
}
