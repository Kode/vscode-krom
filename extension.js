'use strict';

const fs = require('fs');
const path = require('path');
const vscode = require('vscode');

let channel = null;

function findKrom() {
	let localkrompath = path.resolve(vscode.workspace.rootPath, 'Krom');
	if (fs.existsSync(localkrompath)) return localkrompath;
	let krompath = vscode.workspace.getConfiguration('krom').kromPath;
	if (krompath.length > 0) return krompath;
	return path.join(vscode.extensions.getExtension('ktx.krom').extensionPath, 'Krom');
}

exports.activate = function (context) {
	channel = vscode.window.createOutputChannel('Krom');

	let api = {
		findKrom: findKrom
	};

	return api;
};

exports.deactivate = function () {

};
