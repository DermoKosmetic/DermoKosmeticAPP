import { MiniArticuloModel} from "./mini-articulo.model";
import { PageableModel, sortModel} from "./pageable.model";


export interface PaginableArticuloModel {
    content: MiniArticuloModel[],
    "pageable": PageableModel,
    "last": boolean,
    "totalPages": number,
    "totalElements": number,
    "size": number,
    "number": number,
    "sort": sortModel,
    "first": boolean,
    "numberOfElements": number,
    "empty": boolean
}
