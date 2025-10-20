import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { ApiResponse } from '../models/apiResponse';
import { Auto } from '../models/auto';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  private http = inject(HttpClient)


  apiUrl = "https://dev.matiivilla.cl/barros_luco/";

  async obtenerVehiculos(){
    const response = await lastValueFrom(this.http.get<ApiResponse<any>>(this.apiUrl + 'api/autos'));
    return response;
  }


  async agregarVehiculo(body:Auto){
    const response = await lastValueFrom(this.http.post<any>(this.apiUrl + "api/autos",body));
    return  response;
  }

  async editarVehiculo(body:Auto){
    const response = await lastValueFrom(this.http.put<any>(this.apiUrl + "api/autos",body));
    return  response;
  }

  async eliminarVehiculo(patente:String){
    const response = await lastValueFrom(this.http.delete<any>(this.apiUrl + "api/autos" + patente));
    return  response;
  }

  async buscarVehiculo(patente:String){
    const response = await lastValueFrom(this.http.get<any>(this.apiUrl + "api/autos" + patente));
    return  response;
  }

  
}


interface bodyAgregar{
  
}
