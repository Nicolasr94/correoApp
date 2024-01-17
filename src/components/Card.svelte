<script>
    export let nombrePropietario = "LORE GARZABAL";
    export let fechaRecepcion= new Date();
    export let fechaExpiracion= new Date("11-20-2023");
    export let bardCode = "123456789";
    export let estado = 'ENTREGADO';

    let tiempoRestante = Math.ceil((new Date(fechaExpiracion).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));
  
    function changeState(event) {
     estado = event.target.value;
    }

    function parseTime(time) {
        return time.toLocaleDateString('es-la', { weekday:"long", month:"short", day:"numeric"})
    }
  </script>

<div class="card" class:entregado={estado === 'ENTREGADO'} class:deposito={estado === 'DEPOSITO'} class:error={estado === 'ERROR'} class:devuelto={estado === 'DEVUELTO'}>
    <h3>{nombrePropietario}</h3>
    <p><strong>Fecha de Recepción:</strong> {parseTime(fechaRecepcion)}</p>
    <p><strong>Fecha de Expiración:</strong> {parseTime(fechaExpiracion)}</p>
    <p><strong>Código T&T:</strong> {bardCode}</p>
    <p><strong>Estado:</strong> <span class:entregado={estado === 'ENTREGADO'} class:deposito={estado === 'DEPOSITO'} class:error={estado === 'ERROR'}>{estado}</span></p>
    <p><strong>Tiempo Restante:</strong> {tiempoRestante} días</p>
    <div>
        <button value="ENTREGADO" on:click={changeState}>Entregado</button>
        <button value="DEPOSITO" on:click={changeState}>En deposito</button>
        <button value="DEVUELTO" on:click={changeState}>Devuelto</button>
        <button value="ERROR" on:click={changeState}>Borrar de la lista</button>
    </div>
  </div>

  <style>
    h3{
        margin: 0;
        border-bottom: 1px solid black;
    }
    
    .card {
    border: 5px solid #ccc;
    background-color: #ccc;
      padding: 16px;
      margin: 16px;
      border-radius: 8px;
      width: 300px;
    }
  
    .entregado {
        border-color: green;
    }
  
    .deposito {
        border-color: blue;
    }
  
    .error {
        border-color: red;
    }

    .devuelto{
      border-color: yellow;
    }
  </style>
  
