const users = [
  {
    userName: "Alex Johnson",
    image: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe",
    description:
      "Frontend developer who loves building clean and responsive UIs.",
  },
  {
    userName: "Maria Gomez",
    image: "https://images.unsplash.com/photo-1766039132515-ea88dc3950bd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "UI/UX designer with a passion for minimal and user-friendly designs.",
  },
  {
    userName: "David Kim",
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
    description: "Full-stack developer focused on scalable web applications.",
  },
  {
    userName: "Sophia Lee",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    description: "Product manager who enjoys turning ideas into real products.",
  },
  {
    userName: "James Wilson",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    description: "Backend engineer specializing in APIs and cloud services.",
  },
];

let sum = " ";
users.forEach((val) => {
  sum +=
    val + `  <div class="card">
            <img src="${val.image}" alt="">
            <h1>${val.userName}</h1>
             <h3>${val.description}</h3>
        </div>`
    
         
        
});

var main = document.querySelector('main')
main.innerHTML = sum;
