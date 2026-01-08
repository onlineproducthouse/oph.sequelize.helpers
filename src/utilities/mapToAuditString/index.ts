export const mapToAuditInsertColumnString = (schemaObject: any,): string => {
  const keys = Object.keys(schemaObject)
  let columns = `"${keys[0]}"`

  for (let i = 1; i < keys.length; i++)
    columns += `, "${keys[i]}"`

  return columns
}

export const mapToAuditSelectRowString = (schemaObject: any, schemaShortName: string): string => {
  const keys = Object.keys(schemaObject)
  let columns = `"${schemaShortName}"."${keys[0]}"`

  for (let i = 1; i < keys.length; i++)
    columns += `, "${schemaShortName}"."${keys[i]}"`

  return columns
}
