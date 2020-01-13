import { AnimalPerrito } from './animal-perrito.interface';

export interface Duenio {  // interface -> (Struct)

    nombres: string;
    apellidos: string;
    edad?: number;
    cedula?: string[];
    fechaNacimiento ?: number;
    mascotasPerros?: AnimalPerrito[];
    
}