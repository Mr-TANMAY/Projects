const Insert = document.getElementById("insert")

window.addEventListener("keydown", (e) => { 
   Insert.innerHTML = `
   <div class = "table">
        <table>
            <tr>
                <th>Key</th>
                <th>keyCode</th>
                <th>Code</th>
            </tr>
            <tr>
                <td>${e.key}</td>
                <td>${e.keyCode}</td>
                <td>${e.code}</td>
            </tr>
  
        </table>
    </div>`
 });