import { BackendApiEndpoints } from "@/utils/constants";
import { ApiCall } from "../api";

/**
 * Consulta el listado de instrumentos
 */
export const instrumentsListRequest = async () =>
  ApiCall<InstrumentRowDto[]>(
    BackendApiEndpoints.instruments.getAll.resource,
    BackendApiEndpoints.instruments.getAll.method,
  );
