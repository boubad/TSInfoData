// nodejshttpmanager.ts
/// <reference path="../typings/infodata/infodata.d.ts" />
//
import http = require('http');
import Q = require('q');
//
class NodeJsHttpManager implements InfoData.IHttpManager {
  port: number;
  host: string;
  //
  constructor(shost?: string, nPort?: number) {
    if ((shost != undefined) && (shost != null)) {
      this.host = shost;
    } else {
      this.host = 'localhost';
    }
    if ((nPort != undefined) && (nPort != null)) {
      this.port = nPort;
    } else {
      this.port = 52999;
    }
  }// constructor
  //

  //
  public perform_get(url: string): Q.IPromise<any> {
    var deferred = Q.defer();
    var options = {
      hostname: this.host,
      port: this.port,
      method: 'GET',
      path: url,
      headers: { 'accept': '*/*' }
    };
    var callback = function(response) {
      var str = '';
      response.on('data', function(chunk) {
        str += chunk;
      });
      response.on('end', function() {
        var res = JSON.parse(str);
        deferred.resolve(res);
      });
      response.on('error', function(err) {
        var res = JSON.parse(str);
        deferred.reject(new Error(err));
      });
    }
    http.request(options, callback).end();
    return deferred.promise;
  }// perform_get
  public perform_post(url: string, data: any): Q.IPromise<any> {
    var deferred = Q.defer();
    var sdata = JSON.stringify(data);
    var options = {
      hostname: this.host,
      port: this.port,
      method: 'POST',
      path: url,
      headers: {
        'accept': '*/*',
        'content-type': 'application/json'
      }
    };
    var callback = function(response) {
      var str = '';
      response.on('data', function(chunk) {
        str += chunk;
      });
      response.on('end', function() {
        var res = JSON.parse(str);
        deferred.resolve(res);
      });
      response.on('error', function(err) {
        var res = JSON.parse(str);
        deferred.reject(new Error(err));
      });
    }
    var req = http.request(options, callback);
    req.write(sdata);
    req.end();
    return deferred.promise;
  }// perform_post
  public perform_put(url: string, data: any): Q.IPromise<any> {
    var deferred = Q.defer();
    var sdata = JSON.stringify(data);
    var options = {
      hostname: this.host,
      port: this.port,
      method: 'PUT',
      path: url,
      headers: {
        'accept': '*/*',
        'content-type': 'application/json'
      }
    };
    var callback = function(response) {
      var str = '';
      response.on('data', function(chunk) {
        str += chunk;
      });
      response.on('end', function() {
        var res = JSON.parse(str);
        deferred.resolve(res);
      });
      response.on('error', function(err) {
        var res = JSON.parse(str);
        deferred.reject(new Error(err));
      });
    }
    var req = http.request(options, callback);
    req.write(sdata);
    req.end();
    return deferred.promise;
  }// perform_put
  public perform_remove(url: string): Q.IPromise<any> {
    var deferred = Q.defer();
    var options = {
      hostname: this.host,
      port: this.port,
      method: 'DELETE',
      path: url
    };
    var callback = function(response) {
      var str = '';
      response.on('data', function(chunk) {
        str += chunk;
      });
      response.on('end', function() {
        var res = JSON.parse(str);
        deferred.resolve(res);
      });
      response.on('error', function(err) {
        var res = JSON.parse(str);
        deferred.reject(new Error(err));
      });
    }
    var req = http.request(options, callback);
    req.end();
    return deferred.promise;
  }// perform_remove
}// class NodeJsHttpManager
export = NodeJsHttpManager;
