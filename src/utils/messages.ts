/**
 * Textos genericos
 */
const genericMessages = {
  yes: "Si",
  no: "No",
  ok: "OK",
  back: "Volver",
  previous: "Atras",
  next: "Siguiente",
  continue: "Continuar",
  finish: "Finalizar",
  accept: "Aceptar",
  cancel: "Cancelar",
  apply: "Aplicar",
  edit: "Editar",
  new: "Nuevo",
  manage: "Gestionar",
  administer: "Administrar",
  check: "Checkear",
  search: "Buscar",
  clean: "Limpiar",
  save: "Guardar",
  delete: "Eliminar",
  create: "Crear",
  update: "Actualizar",
  refresh: "Actualizar",
  send: "Enviar",
  reset: "Reiniciar",
  seeMore: "Ver más",
  list: {
    empty: "No contiene elementos",
    duplicated: (key: string, value: string) =>
      `Ya existe un elemento con el ${key} "${value}"`,
  },
  table: {
    rowsPerPage: "Cant. de registros por página",
    rowsShowOfTotal: (startRow: number, endRow: number, rowCounts: number) =>
      `Mostrando registros ${startRow} - ${endRow} de ${rowCounts}`,
    pageShowOfTotal: (currentPage: number, totalPages: number) =>
      `Pagina ${currentPage} de ${totalPages}`,
  },
  requestConfirmation: {
    title: "Confirmación",
    text: "¿Está seguro de que desea continuar?",
  },
};

export { genericMessages };
