import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [
    {
      name: "CSPM Executive Dashboard",
      widgets: [
        { id: 1, title: "Cloud Accounts", content: "2 Total (Connected: 2, Not Connected: 2)" },
        { id: 2, title: "Cloud Account Risk Assessment", content: "9659 Total (Failed: 1689, Warning: 681, Passed: 7253)" }
      ]
    },
    { name: "CWPP Dashboard", widgets: [] },
    {
      name: "Registry Scan",
      widgets: [
        { id: 3, title: "Image Risk Assessment", content: "1470 Total Vulnerabilities (Critical: 9, High: 150)" },
        { id: 4, title: "Image Security Issues", content: "2 Total Images (Critical: 2, High: 4)" }
      ]
    }
  ]
};

const widgetSlice = createSlice({
  name: "widgets",
  initialState,
  reducers: {
    addWidget: (state, action) => {
      const { categoryName, widget } = action.payload;
      const category = state.categories.find(cat => cat.name === categoryName);
      if (category) {
        category.widgets.push({ id: Date.now(), ...widget });
      }
    },
    removeWidget: (state, action) => {
      const { categoryName, widgetId } = action.payload;
      const category = state.categories.find(cat => cat.name === categoryName);
      if (category) {
        category.widgets = category.widgets.filter(widget => widget.id !== widgetId);
      }
    }
  }
});

export const { addWidget, removeWidget } = widgetSlice.actions;
export default widgetSlice.reducer;
