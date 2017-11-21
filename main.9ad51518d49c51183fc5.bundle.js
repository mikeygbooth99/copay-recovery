webpackJsonp([1],{0:function(e,t){},1:function(e,t){},2:function(e,t){},4:function(e,t,n){e.exports=n("cDNt")},"6kpM":function(e,t,n){"use strict";var s=n("/oeL"),a=n("koeK"),r=(n.n(a),n("nVvX")),i=(n.n(r),n("x8nq")),o=(n.n(i),n("OGkG")),c=(n.n(o),n("xrDH")),l=(n.n(c),n("XKz0"));n.d(t,"a",function(){return u});var d=this&&this.__decorate||function(e,t,n,s){var a,r=arguments.length,i=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,s);else for(var o=e.length-1;o>=0;o--)(a=e[o])&&(i=(r<3?a(i):r>3?a(t,n,i):a(t,n))||i);return r>3&&i&&Object.defineProperty(t,n,i),i},p=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},u=function(){function e(e){this.http=e,this.shouldTranslate=!0,this.apiURI={"btc/livenet":"https://insight.bitpay.com/api/","btc/testnet":"https://test-insight.bitpay.com/api/","bch/livenet":"https://blockdozer.com/insight-api/"},this.PATHS={BIP45:["m/45'/2147483647/0","m/45'/2147483647/1"],BIP44:{testnet:["m/44'/1'/0'/0","m/44'/1'/0'/1"],livenet:["m/44'/0'/0'/0","m/44'/0'/0'/1"],"bch/livenet":["m/44'/0'/0'/0","m/44'/0'/0'/1"]}}}return e.prototype.fromBackup=function(e,t,n,s,r){if(!e.backup)return null;try{JSON.parse(e.backup)}catch(e){throw console.log(e),new Error("JSON invalid. Please copy only the text within (and including) the { } brackets around it.")}var i;try{i=a.decrypt(e.password,e.backup)}catch(e){throw console.log(e),new Error("Incorrect backup password")}if(i=JSON.parse(i),!i.n)throw new Error("Backup format not recognized. If you are using a Copay Beta backup and version is older than 0.10, please see: https://github.com/bitpay/copay/issues/4730#issuecomment-244522614");if(i.m!=t||i.n!=n)throw new Error("The wallet configuration (m-n) does not match with values provided.");if(i.network!=r)throw new Error("Incorrect network.");if(!i.xPrivKeyEncrypted&&!i.xPrivKey)throw new Error("The backup does not have a private key");var o=i.xPrivKey;if(i.xPrivKeyEncrypted)try{o=a.decrypt(e.xPrivPass,i.xPrivKeyEncrypted)}catch(e){throw console.log(e),new Error("Can not decrypt private key")}return{walletId:i.walletId,copayerId:i.copayerId,publicKeyRing:i.publicKeyRing,xPriv:o,derivationStrategy:i.derivationStrategy||"BIP45",addressType:i.addressType||"P2SH",m:t,n:n,network:r,coin:s,from:"backup"}},e.prototype.checkAngularCryptoConfig=function(e){try{new o(e).toHDPrivateKey("","testnet").toString()}catch(e){return console.log(e),"Before starting, check the angular cli configuration described in the README/Installation section"}return null},e.prototype.fromMnemonic=function(e,t,n,s,a){if(!e.backup)return null;var r,i=e.backup,c=e.password;try{r=new o(i).toHDPrivateKey(c,a).toString()}catch(e){throw console.log(e),new Error("Mnemonic wallet seed is not valid.")}return{xPriv:r,derivationStrategy:"BIP44",addressType:1==n?"P2PKH":"P2SH",m:t,n:n,network:a,coin:s,from:"mnemonic"}},e.prototype.buildWallet=function(e){var t;if(e=c.compact(e),0==e.length)throw new Error("No data provided");if(1!=c.uniq(c.map(e,"from")).length)throw new Error("Mixed backup sources not supported");if(1!=c.uniq(c.map(e,"coin")).length)throw new Error("Mixed coins not supported");if(t=c.pick(e[0],["walletId","derivationStrategy","addressType","m","n","network","from","coin","publicKeyRing"]),t.copayers=c.map(e,function(e){if(e.walletId!=t.walletId)throw new Error("Backups do not belong to the same wallets.");return{copayerId:e.copayerId,xPriv:e.xPriv}}),"backup"==t.from&&c.uniq(c.compact(c.map(t.copayers,"copayerId"))).length!=t.copayers.length)throw new Error("Some of the backups belong to the same copayers");return console.log("Recovering wallet",t),t},e.prototype.getWallet=function(e,t,n,s,a){var o=this,l=this,d=c.map(e,function(e){return"{"==e.backup.charAt(0)?o.fromBackup(e,t,n,s,a):o.fromMnemonic(e,t,n,s,a)});if("btc"==s)l.bitcore=r;else{if("bch"!=s)throw new Error("Unknown coin "+s);l.bitcore=i}return this.buildWallet(d)},e.prototype.scanWallet=function(e,t,n,s){var a;this.getActiveAddresses(e,t,n,function(e,t){if(e)return s(e);a=c.flatten(c.map(t,"utxo"));var n={addresses:c.uniq(t),balance:c.sumBy(a,"amount")};return s(null,n)})},e.prototype.getPaths=function(e){return"BIP45"==e.derivationStrategy?this.PATHS[e.derivationStrategy]:"BIP44"==e.derivationStrategy?this.PATHS[e.derivationStrategy][e.network]:void 0},e.prototype.getHdDerivations=function(e){function t(e,t,n){var a=s.bitcore.HDPrivateKey(e);return n?a.deriveChild(t):a.deriveNonCompliantChild(t)}function n(e){return 1==e.length?e[0]:function(e,t){for(var n=[],s=0;s<e.length;s++)for(var a=0;a<t.length;a++)n.push(c.flatten([e[s],t[a]]));return n}(e[0],n(c.tail(e)))}var s=this,a=c.map(e.copayers,"xPriv"),r=[];return c.each(this.getPaths(e),function(e){var s=n(c.map(a,function(n,s){var a=t(n,e,!0),r=t(n,e,!1),i=[];return i.push({copayer:s+1,path:e,compliant:!0,key:a}),a.toString()!=r.toString()&&i.push({copayer:s+1,path:e,compliant:!1,key:r}),i}));r=r.concat(s)}),r},e.prototype.getActiveAddresses=function(e,t,n,s){function a(e){if(e>=d.length)return s(null,c.uniqBy(l,"address"));i=0,r(d[e],0,function(t,n){if(t)return s(t);a(e+1)})}function r(s,a,d){if(i>t)return d();var p=o.generateAddress(e,s,a);o.getAddressData(p,e.coin,e.network,function(e,t){if(e)return d(e);c.isEmpty(t)?i++:(console.log("#Active address:",t),l.push(t),i=0),n(i,c.uniqBy(l,"address")),r(s,a+1,d)})}var i,o=this,l=[],d=this.getHdDerivations(e);a(0)},e.prototype.generateAddress=function(e,t,n){var s=this,a=[],r=[];if(c.each([].concat(t),function(e){var t=s.bitcore.HDPrivateKey(e.key),i=t.deriveChild(n).privateKey;a.push(i),r.push(i.publicKey)}),e.publicKeyRing){var i,o=[].concat(t),l=o[0].path,d=parseInt(c.last(l.split("/")).toString());r=[],e.publicKeyRing.forEach(function(t){"BIP45"==e.derivationStrategy&&(i=new s.bitcore.HDPublicKey(t.xPubKey).deriveChild(2147483647).deriveChild(d).deriveChild(n)),"BIP44"==e.derivationStrategy&&(i=new s.bitcore.HDPublicKey(t.xPubKey).deriveChild(d).deriveChild(n)),r.push(i.publicKey)})}var p;if("P2SH"==e.addressType)p=s.bitcore.Address.createMultisig(r,e.m,e.network);else{if("P2PKH"!=e.addressType)throw new Error("Address type not supported");p=s.bitcore.Address.fromPublicKey(r[0],e.network)}return{addressObject:p,pubKeys:r,privKeys:a,info:t,index:n}},e.prototype.getAddressData=function(e,t,n,s){var a=this,r=this;this.checkAddress(e.addressObject,t,n).then(function(i){i.subscribe(function(i){r.checkUtxos(e.addressObject,t,n).then(function(r){r.subscribe(function(r){t+"/"+n=="bch/livenet"&&a.shouldTranslate&&(i.addrStr=a.translateAddressCash(i.addrStr).toString(),r=a.translateUtxoAddress(r));var o={address:i.addrStr,balance:i.balance,unconfirmedBalance:i.unconfirmedBalance,utxo:r,privKeys:e.privKeys,pubKeys:e.pubKeys,info:e.info,index:e.index,isActive:i.unconfirmedTxApperances+i.txApperances>0};setTimeout(function(){return o.isActive?s(null,o):s()},5e3)})})})})},e.prototype.translateUtxoAddress=function(e){var t=this;return e.forEach(function(e){e.address=t.translateAddressCash(e.address)}),e},e.prototype.translateAddressCash=function(e){var t=r.Address(e),n=t.toObject();return i.Address.fromObject(n)},e.prototype.translateAddress=function(e){var t=i.Address(e),n=t.toObject();return r.Address.fromObject(n)},e.prototype.checkAddress=function(e,t,n){var s=this;t+"/"+n=="bch/livenet"&&this.shouldTranslate&&(e=this.translateAddress(e));var a=this.apiURI[t+"/"+n]+"addr/"+e.toString()+"?noTxList=1";return new Promise(function(e){e(s.http.get(a))})},e.prototype.checkUtxos=function(e,t,n){var s=this;t+"/"+n=="bch/livenet"&&this.shouldTranslate&&(e=this.translateAddress(e));var a=this.apiURI[t+"/"+n]+"addr/"+e.toString()+"/utxo?noCache=1";return new Promise(function(e){e(s.http.get(a))})},e.prototype.createRawTx=function(e,t,n,s){var a=this;if(!e||!a.bitcore.Address.isValid(e))throw new Error("Please enter a valid address.");var r=parseInt((1e8*t.balance-1e8*s).toFixed(0));if(r<=0)throw new Error("Funds are insufficient to complete the transaction");console.log("Generating a "+n.coin+" transaction");try{new a.bitcore.Address(e,n.network)}catch(e){throw console.log(e),new Error("Incorrect destination address network")}try{var i=[],o=new a.bitcore.Transaction;c.each(t.addresses,function(e){e.utxo.length>0&&c.each(e.utxo,function(t){"P2SH"==n.addressType?o.from(t,e.pubKeys,n.m):o.from(t),i=i.concat(e.privKeys.slice(0,n.m))})}),o.to(e,r),o.sign(c.uniq(i));var l=o.serialize();return console.log("Raw transaction: ",l),l}catch(e){throw console.log(e),new Error("Could not build tx: "+e)}},e.prototype.txBroadcast=function(e,t,n){var s=this,a=this.apiURI[t+"/"+n]+"tx/send";return console.log("Posting tx to..."+a),new Promise(function(t){t(s.http.post(a,{rawtx:e}))})},e}();u=d([n.i(s.c)(),p("design:paramtypes",["function"==typeof(h=void 0!==l.b&&l.b)&&h||Object])],u);var h},W675:function(e,t,n){t=e.exports=n("rP7Y")(!1),t.push([e.i,"",""]),e.exports=e.exports.toString()},"aR8+":function(e,t,n){"use strict";var s=n("fc+i"),a=n("/oeL"),r=n("bm2B"),i=n("XKz0"),o=n("wQAS");n.d(t,"a",function(){return l});var c=this&&this.__decorate||function(e,t,n,s){var a,r=arguments.length,i=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,s);else for(var o=e.length-1;o>=0;o--)(a=e[o])&&(i=(r<3?a(i):r>3?a(t,n,i):a(t,n))||i);return r>3&&i&&Object.defineProperty(t,n,i),i},l=function(){function e(){}return e}();l=c([n.i(a.b)({declarations:[o.a],imports:[s.a,r.a,i.a],providers:[],bootstrap:[o.a]})],l)},cDNt:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n("/oeL"),a=n("Qa4U"),r=n("aR8+");n("p5Ee").a.production&&n.i(s.a)(),n.i(a.a)().bootstrapModule(r.a)},efyd:function(e,t){e.exports='<div class="header">\n  <div class="header-content">\n    <img class="bitpay-logo" src="assets/img/bitpay-logo-negative.svg" alt="Bitpay">\n    <div class="header-center">\n      <h3 class="header-title">Recovery Tool</h3>\n      <div class="repository-link">\n        <a href="https://github.com/bitpay/copay-recovery" target="blank">\n          <img src="assets/img/github.png" alt="Github">\n        </a>\n      </div>\n    </div>\n    <img class="copay-logo" src="assets/img/copay-logo-negative.svg" alt="Copay">\n  </div>\n</div>\n<div [hidden]="!showLoadingSpinner" class="no-clickable-background">\n  <div class="loading-message">\n    <h5>Please wait</h5>\n    <h5>This process could take several minutes</h5>\n    <PRE *ngIf="(reportAddresses || reportAmount || reportInactive) && beforeScan">\n      <div class="labels">\n        Scanned addresses:\n        Found funds:\n        Inactive Addresses Streak:\n      </div>\n      <div class="values">\n        {{reportAddresses}}\n        {{reportAmount}}\n        {{reportInactive}}\n      </div>\n    </PRE>\n  </div>\n</div>\n<div class="container">\n\n  <div [hidden]="!successMessage" class="alert alert-success">{{successMessage}}</div>\n  <div [hidden]="!errorMessage" class="alert alert-danger">{{errorMessage}}</div>\n  <div [hidden]="!statusMessage" class="alert alert-info">{{statusMessage}}</div>\n\n  <form #processInputsForm="ngForm" (ngSubmit)="processInputs()" *ngIf="beforeScan">\n\n    <div class="card">\n      <div class="card-block">\n        <h4 class="card-title">WALLET CONFIGURATION</h4>\n        <div class="row">\n          <div class="col-sm-12 col-xs-12 first-row">\n            <div class="form-group signatures">\n              <label for="signaturesNumber">Required number of signatures</label>\n              <select class="form-control" id="signaturesNumber" name="signaturesNumber" [(ngModel)]="signaturesNumber">\n              <option *ngFor="let option of availableOptions" [ngValue]="option">{{option}}</option>\n            </select>\n            </div>\n\n            <div class="form-group copayers">\n              <label for="copayersNumber">Total number of Copayers</label>\n              <select class="form-control" id="copayersNumber" name="copayersNumber" [(ngModel)]="copayersNumber" (ngModelChange)="updateCopayersForm($event)">\n              <option *ngFor="let option of availableOptions" [ngValue]="option">{{option}}</option>\n            </select>\n            </div>\n          </div>\n\n          <div class="form-group col-sm-6 col-xs-12">\n            <label for="chain">Chain: Bitcoin</label>\n            <span *ngIf="chain == \'btc/livenet\'">livenet</span>\n            <span *ngIf="chain == \'btc/testnet\'">testnet</span>\n            <span *ngIf="chain == \'bch/livenet\'">Cash livenet</span>\n            <div class="chain-select">\n              <select class="form-control" id="chain" name="chain" [(ngModel)]="chain">\n                <option *ngFor="let chain of availableChains" [ngValue]="chain">{{chain}}</option>\n              </select>\n              <div class="chain-logo-container">\n                <img src="assets/img/icon-btc.svg" class="chain-logo" *ngIf="chain == \'btc/livenet\'">\n                <img src="assets/img/icon-testnet.svg" class="chain-logo" *ngIf="chain == \'btc/testnet\'">\n                <img src="assets/img/icon-bch.svg" class="chain-logo" *ngIf="chain == \'bch/livenet\'">\n              </div>\n            </div>\n          </div>\n\n          <div class="form-group col-sm-6 col-xs-12">\n            <label for="addressGap">Address Gap</label><small> (Usually does not need to be changed)</small>\n            <input type="number" class="form-control" id="addressGap" name="addressGap" [(ngModel)]="addressGap" required>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class="card" *ngFor="let copayer of copayers">\n      <div class="card-block">\n        <h6 class="card-title">Backup for copayer {{copayer}}:</h6>\n        <div class="row">\n          <div class="form-group col-sm-6">\n            <label for="dataBackUp">Recovery phrase (mnemonic) or File/Text backup</label>\n            <input type="text" class="form-control" id="dataBackUp-{{copayer}}" name="dataBackUp-{{copayer}}" [(ngModel)]="data.backUp[copayer]"\n              autocomplete="off">\n          </div>\n\n          <div class="form-group col-sm-6">\n            <label for="contentFile">Or upload a File/Text backup:</label>\n            <input type="file" class="form-control-file" id="contentFile" name="contentFile" accept=".json, .txt" aria-describedby="contentFileHelp"\n              (change)="fileChangeEvent($event, copayer)">\n            <small id="fileHelp" class="form-text text-muted">Extensions accepted: .json and .txt</small>\n          </div>\n        </div>\n\n        <div class="form-group">\n          <label for="dataPass">Backup password:</label><small> (in case you have one)</small>\n          <input type="password" class="form-control" id="dataPass-{{copayer}}" name="dataPass-{{copayer}}" [(ngModel)]="data.pass[copayer]">\n        </div>\n\n        <div class="form-group">\n          <label for="dataPassX">Encrypted private key password</label><small> (spending password)</small>\n          <input type="password" class="form-control" id="dataPassX-{{copayer}}" name="dataPassX-{{copayer}}" [(ngModel)]="data.passX[copayer]">\n        </div>\n      </div>\n    </div>\n\n    <div class="form-group">\n      <label>\n      <input type="checkbox" [(ngModel)]="termsAccepted" name="termsAccepted">\n        I have read and accept <a href="https://copay.io/disclaimer" target="_blank">Terms and Conditions</a>\n      </label>\n    </div>\n\n    <button type="submit" [disabled]="!processInputsForm.form.valid  || showLoadingSpinner || !termsAccepted" class="btn btn-primary btn-lg btn-block">\n      <span *ngIf="chain == \'btc/livenet\' || chain == \'btc/testnet\'">Scan BTC Wallet</span>\n      <span *ngIf="chain == \'bch/livenet\'">Scan BCH Wallet</span>\n    </button>\n  </form>\n\n  <form #sendFundsForm="ngForm" (ngSubmit)="sendFunds(destinationAddress, chain)" *ngIf="!beforeScan && !done">\n    <div class="card">\n      <div class="card-block">\n        <h6 class="card-title">{{totalBalanceStr}}</h6>\n        <div class="input-group" *ngIf="!insufficentsFunds">\n          <div class="input-group-addon">Destination Address:</div>\n          <input type="text" class="form-control" id="destinationAddress" name="destinationAddress" [(ngModel)]="destinationAddress"\n            required>\n        </div>\n      </div>\n    </div>\n    <button type="submit" *ngIf="!insufficentsFunds" [disabled]="!sendFundsForm.form.valid || showLoadingSpinner" class="btn btn-primary btn-lg btn-block">Transfer</button>\n  </form>\n\n  <button type="button" (click)="viewOnBlockchain()" *ngIf="broadcasted" class="btn btn-outline-primary btn-lg btn-block">View on blockchain</button>\n  <button type="button" (click)="ngOnInit()" *ngIf="!beforeScan" class="btn btn-outline-primary btn-lg btn-block">Go back</button>\n\n  <div [hidden]="!showLoadingSpinner">\n    <div class="s1">\n      <div class="s b sb1"></div>\n      <div class="s b sb2"></div>\n      <div class="s b sb3"></div>\n      <div class="s b sb4"></div>\n    </div>\n    <div class="s2">\n      <div class="s b sb5"></div>\n      <div class="s b sb6"></div>\n      <div class="s b sb7"></div>\n      <div class="s b sb8"></div>\n    </div>\n    <div class="bigcon">\n      <div class="big b"></div>\n    </div>\n  </div>\n\n</div>'},n7du:function(e,t){function n(e){throw new Error("Cannot find module '"+e+"'.")}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id="n7du"},p5Ee:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var s={production:!1}},wQAS:function(e,t,n){"use strict";var s=n("/oeL"),a=n("xrDH"),r=(n.n(a),n("6kpM"));n.d(t,"a",function(){return c});var i=this&&this.__decorate||function(e,t,n,s){var a,r=arguments.length,i=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,s);else for(var o=e.length-1;o>=0;o--)(a=e[o])&&(i=(r<3?a(i):r>3?a(t,n,i):a(t,n))||i);return r>3&&i&&Object.defineProperty(t,n,i),i},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},c=function(){function e(e){this.RecoveryService=e,this.copayers=[1],this.addressGap=20,this.data={backUp:[],pass:[],passX:[],gap:this.addressGap},this.availableOptions=[1,2,3,4,5,6],this.availableChains=["btc/livenet","btc/testnet","bch/livenet"],this.fee=.001,this.signaturesNumber=this.availableOptions[0],this.copayersNumber=this.availableOptions[0],this.chain=this.availableChains[0],this.statusMessage=null,this.successMessage=null,this.errorMessage=null,this.showLoadingSpinner=!1,this.done=!1,this.broadcasted=!1,this.insufficentsFunds=!1,this.termsAccepted=!1}return e.prototype.ngOnInit=function(){this.hideMessage(),this.beforeScan=!0,this.done=!1,this.broadcasted=!1,this.insufficentsFunds=!1,this.destinationAddress="",this.txid=null,this.checkAngularCryptoConfig()},e.prototype.checkAngularCryptoConfig=function(){var e=this.RecoveryService.checkAngularCryptoConfig("imitate type scorpion whip oil cheese achieve rail organ donkey note screen");e&&this.showMessage(e,3)},e.prototype.updateCopayersForm=function(){this.copayers=a.map(a.range(1,this.copayersNumber+1),function(e){return e})},e.prototype.processInputs=function(){var e=this;this.hideMessage();var t=this;this.showLoadingSpinner=!0,this.beforeScan=!0;var n=a.map(a.range(1,this.copayersNumber+1),function(e){return{backup:t.data.backUp[e]||"",password:t.data.pass[e]||"",xPrivPass:t.data.passX[e]||""}});this.chain.match(/bch/)?(this.network="livenet",this.coin="bch",this.fee=1e-5):(this.network=this.chain.replace("btc/",""),this.coin="btc",this.fee=.001);try{this.wallet=this.RecoveryService.getWallet(n,this.signaturesNumber,this.copayersNumber,this.coin,this.network)}catch(e){return this.showLoadingSpinner=!1,this.showMessage(e.message,3)}this.showMessage("Scanning funds...",1);var s=function(e,n){var s=a.sumBy(a.flatten(a.map(n,"utxo")),"amount"),r=s.toFixed(8)+" ";t.reportInactive=e,t.reportAmount=r+" "+t.wallet.coin,t.reportAddresses=n.length},r=+this.addressGap;r=r||20,this.RecoveryService.scanWallet(this.wallet,r,s,function(t,n){if(t)return e.showMessage(t,3);e.scanResults=n,console.log("## Total balance:",e.scanResults.balance.toFixed(8)+" BTC"),e.showMessage("Search completed",2),e.showLoadingSpinner=!1,e.beforeScan=!1,e.totalBalance=e.scanResults.balance.toFixed(8),e.totalBalanceStr="Available balance: "+e.scanResults.balance.toFixed(8)+" "+e.wallet.coin.toUpperCase(),e.scanResults.balance-e.fee<=0&&(e.totalBalanceStr+=". Insufficents funds.",e.insufficentsFunds=!0)})},e.prototype.fileChangeEvent=function(e,t){this.readThis(e.target,t)},e.prototype.readThis=function(e,t){var n=this,s=e.files[0],a=new FileReader;a.readAsText(s),a.onloadend=function(e){n.data.backUp[t]=a.result}},e.prototype.sendFunds=function(e,t){var n=this;if(confirm("A total of "+this.totalBalance+" will be send to: \n\nDestination address: "+e+"\nChain: "+t.substring(0,3).toUpperCase())){var s;this.showLoadingSpinner=!0;try{s=this.RecoveryService.createRawTx(e,this.scanResults,this.wallet,this.fee)}catch(e){return this.showMessage(e.message,3)}this.done=!0,this.RecoveryService.txBroadcast(s,this.coin,this.network).then(function(t){t.subscribe(function(t){n.showMessage((n.scanResults.balance-n.fee).toFixed(8)+" "+n.wallet.coin+" sent to address: "+e,2),n.broadcasted=!0,n.txid=t.txid,console.log("Transaction complete. "+(n.scanResults.balance-n.fee)+" TX sent to address: "+e),console.log("Transaction id: ",n.txid)})}).catch(function(e){n.showMessage("Could not broadcast transaction. Please, try later.",3)})}},e.prototype.viewOnBlockchain=function(){var e;switch(this.chain){case"btc/livenet":e="https://insight.bitpay.com/tx/";break;case"btc/testnet":e="https://test-insight.bitpay.com/tx/";break;case"bch/livenet":e="https://bch-insight.bitpay.com/tx/";break;default:e="https://insight.bitpay.com/tx/"}window.open(e+this.txid,"_blank").focus()},e.prototype.hideMessage=function(){this.statusMessage=null,this.successMessage=null,this.errorMessage=null},e.prototype.showMessage=function(e,t){1==t?(this.statusMessage=e,this.successMessage=null,this.errorMessage=null):2==t?(this.successMessage=e,this.statusMessage=null,this.errorMessage=null,this.showLoadingSpinner=!1):3==t&&(this.errorMessage=e,this.statusMessage=null,this.successMessage=null,this.showLoadingSpinner=!1),setTimeout(function(){window.scrollTo(0,1)},150)},e}();c=i([n.i(s._5)({selector:"app-root",template:n("efyd"),styles:[n("W675")],providers:[r.a]}),o("design:paramtypes",["function"==typeof(l=void 0!==r.a&&r.a)&&l||Object])],c);var l}},[4]);