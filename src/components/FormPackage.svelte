    <script>
        import { addPackage } from '../utils/addPackage.js';
        import Alerts from './Alerts.svelte';
        import {currentTimestamp, expirationTimestamp} from '../utils/getDate.js';

      let form;
      let CustomAlert
      let message='';
        let formData={
            code:'',
            name:'',
            state:0,
            comments:'',
            delivered:false,
            visible:true
        };

    const handleSubmit = async (data) => {
      try {
      // Lógica de validación y preparación de datos aquí
      data.timeToReceived = currentTimestamp;
      data.timeToExpired = expirationTimestamp;
      // Llamada a la función Add para comunicarse con Firebase
      await addPackage(data);

    } catch (error) {
      console.error('Error al agregar el producto:', error);
    }   
    finally {
      if (form) { // Verifica si form está definido antes de usarlo
      form.reset();
    }
    message=`Pieza de ${data.name} agregada con exito`;
    CustomAlert.showAlert();

    }
     };


    </script>
    <div>
    <h2 style="text-align: center;">Agrega una nueva pieza</h2>
      <article>
        <form  bind:this={form} on:submit|preventDefault={()=>handleSubmit(formData)}>
            
            <label for="code">Ingresa el codigo T&T</label>
                <input
                autocomplete="off"  
                type="text"
                id="code"
                bind:value={formData.code}
                required/>
            <label for="name">Ingresa el nombre que figura en el "Destinatario"</label>
                <input 
                type="text"
                id="name"
                bind:value={formData.name}
                required/>
              <!-- -<strong>¿Hubo un error al ingresar la pieza?</strong>
                <input type="text" id="comments" bind:value={formData.comments} placeholder="Escribalo aqui "> -->
                <button type="submit" >Agregar</button>
        </form>

        <Alerts bind:this={CustomAlert}   {message}></Alerts>
    </article>
  </div>

<style>
  div{
    display: relative;
    padding: 2rem;
    border: 2px solid #ffd500;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    
  }
  .error{
    color: red;
  }
  .noError{
    display: none;
  }
   article {
    display: grid;
    place-items: center;
    padding: 2rem;
    border: 2px solid #ffd500;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    max-width: 400px;
    margin: auto;
  }

  form {
    display: grid;
    gap: 1rem;
    text-align: center;
  }

  label {
    display: block;
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
  }

  input,
  button,option {
    width: 100%;
    padding: 0.7rem;
    font-size: 1rem;
    border: 1px solid #ddd;
    border-radius: 5px;
    box-sizing: border-box;
    outline: none;
  }
  select {
    width: 100%;
    padding: 0.7rem;
    font-size: 1rem;
    border: 1px solid #ddd;
    border-radius: 5px;
    box-sizing: border-box;
    appearance: none;
    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='%23333'%3E%3Cpath d='M10 12l-6-6h12z'/%3E%3C/svg%3E") no-repeat right 10px center/15px 15px;
    outline: none;
    cursor: pointer;
  }

 
  button {
    background-color: #ffd500;
    color: #333;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  button:hover {
    background-color: #ffc000;
  }

  #comments {
    margin-top: 1rem;
    margin-bottom: 1rem;
    text-align: center;
    font-size: 1rem;
    padding: 3px;
  }
</style>