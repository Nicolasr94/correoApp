<script>
    export let message = "";
    
export function showAlert() {
        isVisible = true;
    }
    export     function closeAlert() {
      isVisible = false;
    }
    let isVisible = false;
  
  </script>
  
  {#if isVisible}
    <div class="custom-alert">
      <div class="alert-content">
        <p>{message}</p>
        <button on:click={closeAlert}>Ok</button>
      </div>
    </div>
  {/if}
  
  <style>

  
    /* Estilos del modal */
    .custom-alert {
      display: flex;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      align-items: center;
      justify-content: center;
      z-index: 9999;
    }
  
    .alert-content {
      background: #fff;
      padding: 20px;
      border-radius: 8px;
      text-align: center;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    }
  
    /* Estilos del botón */
    .alert-content button {
      padding: 10px 20px;
      background: #007BFF;
      color: #fff;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
  </style>
  