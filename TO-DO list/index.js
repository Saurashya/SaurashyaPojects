let count = 0;

      const names = document.querySelector("#name");
      const btn = document.querySelector("#btn");
      const saver = document.querySelector("#saver");
      const errorcatcher = document.querySelector("#error");

      btn.addEventListener("click", () => {
        if (names.value == "") {
          errorcatcher.textContent = "Null INPUT VALUE";
        } else {
          count++;
          errorcatcher.textContent = "";
          const nameEntry = document.createElement("div");
          const nameText = document.createTextNode(count + ") " + names.value);
          const deleteBtn = document.createElement("button");
          deleteBtn.textContent = "Delete";
          deleteBtn.addEventListener("click", () => {
            nameEntry.remove();
            count--;
          });
          nameEntry.appendChild(nameText);
          nameEntry.appendChild(deleteBtn);
          nameEntry.appendChild(document.createElement("br"));
          saver.appendChild(nameEntry);
          names.value = null;
        }
      });