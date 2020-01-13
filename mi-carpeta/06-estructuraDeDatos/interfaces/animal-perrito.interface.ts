import { Duenio } from './duenio.interface'

export interface AnimalPerrito {  // interface -> (Struct)

    nombreCientifico: string,
    clan?: string;
    nombres: string;
    apellidos: string;
    edad?: number;
    cedula?: string[];
    perritas?: string[];
    vacunado?: boolean;
    fechaNacimiento ?: number;
    mascotasPerros?: AnimalPerrito[];
    duenio?: Duenio[]
    
}