const collection = figma.variables.getVariableCollectionById("VariableCollectionId:10695:2912");

const assignCodeSnippets = (allVariables: string[]) => {
  for (const variableId of allVariables) {
    const variable = figma.variables.getVariableById(variableId);
    const codeSnippet = "var(--" + variable?.name.replace(/\//g, "-") + ")";
    variable?.setVariableCodeSyntax("WEB", codeSnippet ? codeSnippet : "no snippet");
  }
}

if (collection) {
  const allVariables = collection.variableIds;
  assignCodeSnippets(allVariables);
}

// Make sure to close the plugin when you're done. Otherwise the plugin will
// keep running, which shows the cancel button at the bottom of the screen.
figma.closePlugin();
