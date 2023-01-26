import { fromEvent, map } from "rxjs";

const text = document.createElement("div");
text.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id ex felis. Phasellus lobortis ac orci vel pulvinar. Aenean mauris nunc, laoreet non orci sed, rutrum hendrerit ligula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris vitae dictum elit. Nullam dignissim nisi purus, ut commodo odio molestie at. Proin eleifend risus leo. Praesent sollicitudin dapibus enim, sit amet cursus ligula tincidunt sit amet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam tincidunt arcu ac nibh vulputate, sed rutrum eros condimentum. Maecenas finibus, odio vitae faucibus tincidunt, enim dolor aliquet dui, mollis eleifend orci mi sed metus.
<br/>
<br/>
Nunc quam dui, viverra id urna sed, imperdiet ullamcorper augue. Donec et rhoncus mauris, quis tincidunt neque. Nullam vitae dapibus velit. Sed maximus ligula malesuada augue venenatis facilisis. Sed sapien ligula, dictum dapibus ornare blandit, accumsan nec lectus. Proin imperdiet, dolor sed vehicula imperdiet, mi turpis ultrices augue, in aliquam massa nisl ac ligula. Maecenas malesuada in quam in commodo.
<br/>
<br/>
Nullam venenatis libero sodales odio semper, in posuere metus rhoncus. Curabitur ante mi, eleifend et lectus in, pretium consectetur arcu. Fusce sagittis tortor neque, non venenatis ligula molestie congue. Aliquam vestibulum lobortis leo ut varius. Morbi malesuada semper nunc quis tincidunt. Cras interdum suscipit porta. Suspendisse feugiat efficitur laoreet. Cras a ex ac dui auctor posuere sit amet nec felis. Mauris imperdiet aliquet quam, et venenatis metus lacinia ac. Aenean ante ipsum, pellentesque et dolor ut, tincidunt lacinia erat. Aliquam erat volutpat. Ut faucibus ipsum eu neque rhoncus, nec malesuada ex lobortis. Mauris sem velit, aliquam eu tincidunt eget, pharetra eget purus.
<br/>
<br/>
Morbi id dapibus sapien. Morbi pulvinar lorem in tellus lobortis, id eleifend est tincidunt. Pellentesque laoreet, ligula et commodo feugiat, metus lectus gravida diam, at commodo est dui eget augue. Etiam consectetur viverra felis id tristique. Sed tempor augue quis ante egestas tincidunt. Pellentesque hendrerit justo nisl, nec auctor neque finibus et. Pellentesque convallis condimentum ex. Maecenas erat ipsum, pulvinar quis pharetra eget, lobortis id neque.
<br/>
<br/>
Phasellus sit amet tellus eget mauris vestibulum sodales. Nulla facilisi. Praesent interdum metus sit amet ex placerat, a suscipit turpis tincidunt. Nam malesuada molestie ligula vel varius. Sed nibh est, luctus sed pulvinar ut, congue vel ligula. Quisque ultrices est vel velit tincidunt, eget vehicula nibh eleifend. Vestibulum sem neque, semper id nibh quis, rutrum ornare tellus.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id ex felis. Phasellus lobortis ac orci vel pulvinar. Aenean mauris nunc, laoreet non orci sed, rutrum hendrerit ligula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris vitae dictum elit. Nullam dignissim nisi purus, ut commodo odio molestie at. Proin eleifend risus leo. Praesent sollicitudin dapibus enim, sit amet cursus ligula tincidunt sit amet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam tincidunt arcu ac nibh vulputate, sed rutrum eros condimentum. Maecenas finibus, odio vitae faucibus tincidunt, enim dolor aliquet dui, mollis eleifend orci mi sed metus.
<br/>
<br/>
Nunc quam dui, viverra id urna sed, imperdiet ullamcorper augue. Donec et rhoncus mauris, quis tincidunt neque. Nullam vitae dapibus velit. Sed maximus ligula malesuada augue venenatis facilisis. Sed sapien ligula, dictum dapibus ornare blandit, accumsan nec lectus. Proin imperdiet, dolor sed vehicula imperdiet, mi turpis ultrices augue, in aliquam massa nisl ac ligula. Maecenas malesuada in quam in commodo.
<br/>
<br/>
Nullam venenatis libero sodales odio semper, in posuere metus rhoncus. Curabitur ante mi, eleifend et lectus in, pretium consectetur arcu. Fusce sagittis tortor neque, non venenatis ligula molestie congue. Aliquam vestibulum lobortis leo ut varius. Morbi malesuada semper nunc quis tincidunt. Cras interdum suscipit porta. Suspendisse feugiat efficitur laoreet. Cras a ex ac dui auctor posuere sit amet nec felis. Mauris imperdiet aliquet quam, et venenatis metus lacinia ac. Aenean ante ipsum, pellentesque et dolor ut, tincidunt lacinia erat. Aliquam erat volutpat. Ut faucibus ipsum eu neque rhoncus, nec malesuada ex lobortis. Mauris sem velit, aliquam eu tincidunt eget, pharetra eget purus.
<br/>
<br/>
Morbi id dapibus sapien. Morbi pulvinar lorem in tellus lobortis, id eleifend est tincidunt. Pellentesque laoreet, ligula et commodo feugiat, metus lectus gravida diam, at commodo est dui eget augue. Etiam consectetur viverra felis id tristique. Sed tempor augue quis ante egestas tincidunt. Pellentesque hendrerit justo nisl, nec auctor neque finibus et. Pellentesque convallis condimentum ex. Maecenas erat ipsum, pulvinar quis pharetra eget, lobortis id neque.
<br/>
<br/>
Phasellus sit amet tellus eget mauris vestibulum sodales. Nulla facilisi. Praesent interdum metus sit amet ex placerat, a suscipit turpis tincidunt. Nam malesuada molestie ligula vel varius. Sed nibh est, luctus sed pulvinar ut, congue vel ligula. Quisque ultrices est vel velit tincidunt, eget vehicula nibh eleifend. Vestibulum sem neque, semper id nibh quis, rutrum ornare tellus.
`;

const body = document.querySelector("body");
body.append(text);

const progressBar = document.createElement("div");
progressBar.setAttribute("class", "progress-bar");
body.append(progressBar);

// funcion que haga el calculo
const calcularPorcentajeScroll = (event) => {
  const { scrollTop, scrollHeight, clientHeight } =
    event.target.documentElement;
  return (scrollTop / (scrollHeight - clientHeight)) * 100;
};

// Streams
const scroll$ = fromEvent(document, "scroll");
// scroll$.subscribe(console.log);

const progress = scroll$.pipe(map(calcularPorcentajeScroll));
progress.subscribe((procentaje) => {
  progressBar.style.width = `${procentaje}%`;
});
