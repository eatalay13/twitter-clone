import { useState } from "react";

const Sidebar = () => {

    const [title, setTitle] = useState("Sidebar");

    return (
        <aside className="w-[275px] min-h-screen">
            <h2>{title}</h2>
            <button onClick={() => setTitle("New Title")}>Change Title</button>
        </aside>
    );
};

export default Sidebar;
