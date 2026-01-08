export const mapToAuditSchema = (schema: any): any => {
  const auditSchema = {}

  Object.keys(schema).forEach(item => {
    auditSchema[item] = { type: schema[item].type, allowNull: true }
  })

  return auditSchema
}
