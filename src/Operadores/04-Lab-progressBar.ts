import { fromEvent } from "rxjs";
import { map } from "rxjs/operators";

const text = document.createElement('div');
text.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet velit rhoncus, dapibus sapien eu, blandit urna. Nulla blandit nisi nibh, vitae convallis sapien varius quis. Curabitur varius diam ac tellus eleifend, sed dignissim mauris efficitur. Integer vitae vehicula leo. Ut semper urna eget diam hendrerit sagittis. Quisque sed efficitur massa. Mauris non maximus ante, in vestibulum augue.
<br/><br/>
Mauris id varius elit. Nam sit amet condimentum ligula. Pellentesque sed ipsum scelerisque, aliquam nunc vitae, vehicula eros. Praesent lacinia, massa vitae scelerisque interdum, tellus turpis semper magna, a mattis nulla felis non velit. Vestibulum tristique ultricies risus at tempor. In hac habitasse platea dictumst. Fusce porttitor risus vitae sem ultrices suscipit. Vestibulum eu iaculis mi.
<br/><br/>
Vestibulum venenatis ipsum mi, ac dictum erat congue vel. Proin commodo viverra arcu nec luctus. Pellentesque vestibulum ipsum tellus, at ultricies odio sodales a. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam eu cursus ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas ac augue ullamcorper, aliquam velit sit amet, iaculis dui. Nullam nec eros eu mauris euismod pulvinar id at ante. Sed id libero lacus. Suspendisse potenti. Duis pharetra tortor nunc, vel dignissim nunc porttitor sed. Nullam quam justo, consectetur ut mattis eget, egestas at ipsum. Curabitur viverra metus mattis condimentum finibus. Curabitur condimentum turpis et blandit sodales. Etiam a lectus sapien.
<br/><br/>
Vivamus quis mauris ac dolor vulputate faucibus non quis enim. Nunc et sapien sem. Duis vestibulum lacus a interdum ultrices. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras nibh risus, molestie ac aliquet a, convallis elementum urna. Etiam suscipit consectetur turpis, non ornare mi pretium et. Integer vel tellus molestie, tincidunt massa sed, fermentum arcu. Pellentesque non enim tortor.
<br/><br/>
Sed quis ipsum a augue gravida mollis ac id lacus. Proin pulvinar nulla ut vulputate commodo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi justo orci, elementum eget odio ut, convallis vulputate magna. Maecenas vehicula tempus felis, sit amet luctus mi malesuada quis. Aliquam ut urna a mauris gravida mollis a ut eros. In maximus venenatis urna, vel aliquet tortor faucibus sit amet. Duis ac lectus sit amet arcu egestas volutpat facilisis sed sem. Pellentesque fermentum finibus turpis. Nam in euismod odio. Nullam id massa dui. Nam volutpat sagittis mattis. Sed congue nunc arcu, at scelerisque massa tempor in. Quisque sit amet feugiat odio, ut gravida nisl. Nunc eu consequat nulla. Nulla dapibus nibh nulla.
<br/><br/>
Curabitur ac magna lorem. Proin condimentum scelerisque lectus, eu condimentum metus consectetur non. Nulla erat magna, laoreet nec sem in, dictum auctor justo. Nullam ultrices, libero nec suscipit posuere, mi dui consequat ligula, at placerat ipsum lectus id quam. Integer non lorem maximus elit vehicula tincidunt convallis eu mi. Fusce facilisis risus at orci semper, id lobortis risus venenatis. Nunc sit amet enim id erat rhoncus ullamcorper eu ut justo. Integer malesuada risus sit amet mi elementum finibus. Nulla id dui quis nisl tempus scelerisque ac a odio. Donec dictum purus quis mollis pretium. Cras eget rhoncus ipsum, euismod varius lectus. Donec malesuada commodo justo, in commodo nibh molestie vel. Nunc elementum lacus non tincidunt condimentum. Suspendisse id tempus erat, vel tempus ligula. Nulla facilisis leo sit amet purus ultricies, iaculis dapibus sem efficitur.
<br/><br/>
In aliquam et metus id mollis. In aliquam pellentesque arcu in sagittis. Sed lobortis at ligula in blandit. Nulla facilisi. Morbi vestibulum mollis varius. Duis mattis pulvinar elit eget finibus. Phasellus et molestie neque. In quis diam at massa sodales lobortis.
<br/><br/>
`;
const body = document.querySelector('body');
body.append(text);

const progressbar = document.createElement('div');
progressbar.setAttribute('class', 'progress-bar');
body.append(progressbar);
// funcion que haga el calculo
const progressBarCalcular = (event) => {
  const {
    scrollTop,
    scrollHeight,
    clientHeight,
  } = event.target.documentElement;
  return (scrollTop / (scrollHeight - clientHeight))* 100;;
}

// streams
const scroll$ = fromEvent(document, 'scroll');
// scroll$.subscribe(console.log);
const progress$ = scroll$.pipe(
  map<Event, number>(event => progressBarCalcular(event))
);
progress$.subscribe(porcetaje => {
  progressbar.style.width = `${porcetaje}%`
});
