import { 
    faTrash, 
    faSignOutAlt, 
    faEdit, 
    faSpinner,
    faCirclePlus,
    faPhone,
    faEnvelope,
    faMapMarkedAlt
  } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";


  const Icons = () => {
    return library.add(
      faTrash, 
      faSignOutAlt, 
      faEdit, 
      faSpinner, 
      faCirclePlus,
      faPhone, 
      faEnvelope,
      faMapMarkedAlt
    );
  };

  export default Icons;