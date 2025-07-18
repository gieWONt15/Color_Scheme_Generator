import "./style.css";

const colorSelect = document.getElementById("your-color");
const dropdown = document.getElementById("dropdown");

const fetchColor = () => {
    let pickedColor = colorSelect.value;
    let hexValue = pickedColor.replace("#", "");
    let pickedOption = dropdown.value;

    fetch(
        `https://www.thecolorapi.com/scheme?hex=${hexValue}&format=json&mode=${pickedOption}`,
        {
            headers: {
                "Content-Type": "application/json",
            },
        }
    )
        .then((res) => res.json())
        .then((data) => {
            pickedColor = colorSelect.value;
            pickedOption = dropdown.value;

            let index = 1;
            data.colors.forEach((color) => {
                document.getElementById(
                    `color_${index}`
                ).style.backgroundColor = color.hex.value;

                document.getElementById(`hex_${index}`).innerText =
                    color.name.closest_named_hex;
                index++;
            });
        });
};

colorSelect.addEventListener("change", fetchColor);

dropdown.addEventListener("change", fetchColor);
