<script>
import {getAllElement} from "../utils/getAllElements.js";


let data =  getAllElement(); 
</script>

<tbody>

  <slot></slot>

 </tbody>


 <style>

  td {
      border-bottom: 1px solid #ccc;
      text-align: center;
      padding: 10px;
  }

 </style>  