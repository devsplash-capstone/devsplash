import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ViewController {
    @RequestMapping({"/", "/home"})
    public String showView(){
        return "forward:/index.html";

    }

//    private void get() {
//    }
// need to come up with the get() method or whatever...

}
