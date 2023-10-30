import { MessageInterface } from "../interfaces/message.interface";
import { EnumSeverityMessage } from "../enums/severity-message.enum";
import { EnumTypeMessage } from "../enums/type-message.enum";

export const ToastsMessages:MessageInterface[] = [
  {
    title: EnumTypeMessage.LOGIN_ERROR,
    severity: EnumSeverityMessage.ERROR,
    summary: 'Error',
    detail: 'Usuario y/o contraseña incorrectos'
  },
  {
    title: EnumTypeMessage.USER_LOGGED,
    severity: EnumSeverityMessage.WARN,
    summary: 'Usuario logeado',
    detail: 'Este usuario se encuentra logeado'
  },
  {
    title: EnumTypeMessage.USER_NOT_LOGGED,
    severity: EnumSeverityMessage.WARN,
    summary: 'Usuario no logeado',
    detail: 'Aun no has iniciado sesión'
  },
  {
    title: EnumTypeMessage.LOGIN_SUCCESS,
    severity: EnumSeverityMessage.SUCCESS,
    summary: 'Sesión Iniciada',
    detail: 'Credenciales correctas'
  },
  {
    title: EnumTypeMessage.LOGOUT_SUCCESS,
    severity: EnumSeverityMessage.SUCCESS,
    summary: 'Sesión cerrada',
    detail: 'La sesión se ha terminado'
  },
  {
    title: EnumTypeMessage.EXPIRED_TOKEN,
    severity: EnumSeverityMessage.ERROR,
    summary: 'Token Expirado',
    detail: 'Su token ha expirado'
  },
  {
    title: EnumTypeMessage.CREATE_SUCCESS,
    severity: EnumSeverityMessage.SUCCESS,
    summary: 'Operación Exitosa',
    detail: 'Registro guardado'
  },
  {
    title: EnumTypeMessage.EDIT_SUCCESS,
    severity: EnumSeverityMessage.SUCCESS,
    summary: 'Operación Exitosa',
    detail: 'Registro actualizado'
  },
  {
    title: EnumTypeMessage.DELETE_SUCCESS,
    severity: EnumSeverityMessage.SUCCESS,
    summary: 'Operación Exitosa',
    detail: 'Registro eliminado'
  },
  {
    title: EnumTypeMessage.OPERATION_ERROR,
    severity: EnumSeverityMessage.ERROR,
    summary: 'Error',
    detail: 'Ha ocurrido un problema'
  },
  {
    title: EnumTypeMessage.UNSELECTED_RECORD_PAGE_SAVE,
    severity: EnumSeverityMessage.WARN,
    summary: 'Advertencia',
    detail: 'Debes escoger un tipo de ficha'
  }
]

