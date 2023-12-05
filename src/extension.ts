import * as vscode from 'vscode';
import * as childProcess from 'child_process';

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('extension.runClickApp', () => {
        // Step 1: Check if the Python script is executing correctly.
        let pythonScriptPath = context.asAbsolutePath('python_code/script.py');
        let pythonProcess = childProcess.spawn('python', [pythonScriptPath]);

        // Step 2: Check if the Python script is receiving the correct arguments.
        // If the Python script expects arguments, pass them in the array above.

        // Step 3: Check if the Python script is producing the expected output.
        pythonProcess.stdout.on('data', (data) => {
            console.log(`stdout: ${data}`);
        });

        pythonProcess.stderr.on('data', (data) => {
            console.error(`stderr: ${data}`);
        });

        // Step 4: Check if the VS Code extension is correctly capturing the output of the Python script.
        pythonProcess.on('close', (code) => {
            console.log(`child process exited with code ${code}`);
        });
    });

    context.subscriptions.push(disposable);
}