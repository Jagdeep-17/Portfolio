const keyboard = [
  [
    { label: "esc", type: "function" },
    { label: "F1", type: "function" },
    { label: "F2", type: "function" },
    { label: "F3", type: "function" },
    { label: "F4", type: "function" },
    { label: "F5", type: "function" },
    { label: "F6", type: "function" },
    { label: "F7", type: "function" },
    { label: "F8", type: "function" },
    { label: "F9", type: "function" },
    { label: "F10", type: "function" },
    { label: "F11", type: "function" },
    { label: "F12", type: "function" },
    { label: "⏏", type: "eject" },
  ],

  [
    "`",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "-",
    "=",
    { label: "delete", type: "delete" },
  ],

  [
    { label: "tab", type: "tab" },
    "Q",
    "W",
    "E",
    "R",
    "T",
    "Y",
    "U",
    "I",
    "O",
    "P",
    "[",
    "]",
    { label: "\\", type: "backslash" },
  ],

  [
    { label: "caps", type: "caps" },
    "A",
    "S",
    "D",
    "F",
    "G",
    "H",
    "J",
    "K",
    "L",
    ";",
    "'",
    { label: "return", type: "return" },
  ],

  [
    { label: "shift", type: "shift" },
    "Z",
    "X",
    "C",
    "V",
    "B",
    "N",
    "M",
    ",",
    ".",
    "/",
    { label: "shift", type: "shift" },
  ],

  [
    "fn",
    "ctrl",
    { label: "⌥", type: "alt" },
    { label: "⌘", type: "command" },
    { label: "", type: "space" },
    { label: "⌘", type: "command" },
    { label: "⌥", type: "alt" },
    { label: "◀", type: "arrow" },
    { label: "▼", type: "arrow" },
    { label: "▲", type: "arrow" },
    { label: "▶", type: "arrow" },
  ],
];

const baseKey = `
flex items-center justify-center
min-w-[35px]
rounded-md
border border-black/20
bg-[#f0f0f0]
text-[10px]
text-[#333]
cursor-pointer
select-none
transition-all duration-200
shadow-[rgba(0,0,0,0.4)_0px_2px_4px,rgba(0,0,0,0.3)_0px_7px_13px_-3px,rgba(0,0,0,0.2)_0px_-1px_0px_inset]
hover:-translate-y-[2px]
hover:bg-[#e5e5e5]
active:translate-y-[1px]
`;

const sizeMap = {
  function: "py-1 max-h-[25px]",
  eject: "ml-4 px-6 py-1",
  delete: "px-6 py-2",
  tab: "flex-[2] py-2",
  backslash: "flex-[2] py-2",
  caps: "flex-[2] py-2",
  return: "flex-[2] py-2",
  shift: "flex-[3] py-2",
  space: "flex-[5] min-w-[175px] py-2",
  command: "text-base py-[2px]",
  alt: "text-base py-[2px]",
  arrow: "min-w-[30px] py-2",
};

export default function Keyboard() {
  return (
    <div className="w-[600px] rounded-2xl bg-gradient-to-b from-[#d3d3d3] to-[#c5c5c5] p-4 pb-5 flex flex-col gap-[5px] shadow-[rgba(0,0,0,0.4)_0px_2px_4px,rgba(0,0,0,0.3)_0px_7px_13px_-3px,rgba(0,0,0,0.2)_0px_-3px_0px_inset] absolute bottom-2 left-1/2 -translate-x-1/2 ">

      {keyboard.map((row, rowIndex) => (
        <div key={rowIndex} className="flex gap-[3px]">

          {row.map((key, index) => {

            const item =
              typeof key === "string"
                ? { label: key, type: "" }
                : key;

            return (
              <div
                key={index}
                className={`${baseKey} ${sizeMap[item.type] || "px-[5px] py-2"}`}
              >
                {item.label}
              </div>
            );
          })}

        </div>
      ))}

    </div>
  );
}