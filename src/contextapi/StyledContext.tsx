// "use client"

// import { CSSProperties, createContext, useContext, useState } from "react";

// interface StyleContextProps {
//     style: CSSProperties;
//     updateStyle: (newStyle: CSSProperties) => void;
// }

// const StyleContext = createContext<any>(undefined);

// export function StyledContextProvider({
//     children,
// }: {
//     children: React.ReactNode
// }) {
//     const defaultStyle: CSSProperties = { border: "10px solid gray", margin: "10px", padding: "10px" }
//     const [style, setStyle] = useState(defaultStyle);
//     const updateStyle: StyleContextProps['updateStyle'] = function (newStyle) {
//         setStyle((prevStyle) => ({ ...prevStyle, ...newStyle }));
//     };

//     return <StyleContext.Provider value={{ style, updateStyle }}>
//         {children}
//     </StyleContext.Provider >
// }

// export function useStyledContext() {
//     const context = useContext(StyleContext);
//     return context;
// }