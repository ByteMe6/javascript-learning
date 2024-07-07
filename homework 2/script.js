    const box = document.getElementById("box");
    let doc = document
    let x = 0;
    let y = 0;


    doc.addEventListener("mousemove", _.debounce((eblan) => {
      x = eblan.clientX - box.offsetWidth;
      y = eblan.clientY - box.offsetHeight;

      box.style.left = `${x + 53}px`;
      box.style.top = `${y + 53}px`;
    }), 200);
