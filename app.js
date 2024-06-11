

const parent =React.createElement('div',{id:'parent'},[
    React.createElement('div',{id:'childe'},[
        React.createElement('h1',{},'this is my tage'),
        React.createElement('h2',{},'this is my h2 tage'),
    
    ]) ,
    React.createElement('div',{id:'childe'},[
        React.createElement('h1',{},'this is my tage'),
        React.createElement('h2',{},'this is my h2 tage'),
    
    ]) ,
]);

         
   console.log(parent);

        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(parent);