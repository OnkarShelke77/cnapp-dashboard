import { useSelector, useDispatch } from "react-redux";
import { addWidget, removeWidget } from "../store/widgetSlice";
import Widget from "./Widget";
import AddWidget from "./AddWidget";
import { useState } from "react";

export default function Dashboard() {
  const dashboard = useSelector((state) => state.widgets);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const filteredCategories = dashboard.categories.map((category) => ({
    ...category,
    widgets: search
      ? category.widgets.filter((widget) =>
          widget.title.toLowerCase().includes(search.toLowerCase())
        )
      : category.widgets
  }));

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "auto" }}>
      <h1>CNAPP Dashboard</h1>
      <h3 id="cspm">CSPM Executive Dashboard</h3>

      <input
        type="text"
        placeholder="Search widgets..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "20px",
          borderRadius: "5px",
          border: "1px solid #ccc"
        }}
      />

      {filteredCategories.map((category) => (
        <div key={category.name} style={{ marginBottom: "30px" }}>
          <h2>{category.name}</h2>
          {category.widgets.length > 0 ? (
            category.widgets.map((widget) => (
              <Widget
                key={widget.id}
                {...widget}
                onRemove={() => dispatch(removeWidget({ categoryName: category.name, widgetId: widget.id }))}
              />
            ))
          ) : (
            <p style={{ color: "gray" }}>No widgets available</p>
          )}
          <AddWidget onAdd={(widget) => dispatch(addWidget({ categoryName: category.name, widget }))} />
        </div>
      ))}
    </div>
  );
}
