#!/usr/bin/env node
const program = require('commander');
// const translator = require('./translate.js')
const dictionary = require('./dictionary.js')
const get_tokens = require('./get_tokens.js')
const token_mapper = require('./token_mapper.js')

var test_doc = `\
from heapqueue import heappush, heappop
import sys
input = sys.stdin.readline
n, m = map(int, input().split())

distances = [-1 for _ in range(n + 1)]
adjacency_list = [[] for _ in range(n + 1)]

for l in range(m):
    x, y, z = map(int, input().split())
    adjacency_list[x].append((y, z))
    adjacency_list[y].append((x, z))

queue = [(0, 1)]
while queue:
    distance, node = heappop(queue)
    if distances[node] != -1:
        continue
    distances[node] = distance
    for dest, add in adjacency_list[node]:
        heappush(queue, (distance + add, dest))

for distance in range(distances):
    print(distance)
`

program
    .command('define <word> <translation>')
    .description('Defines a custom translation. Input <word> in the original language.')
    .option('-l, --language <language>', 'Specify the language the word is being translated to. Default is user language.')
    .action(function (word, translation, options) {
        dictionary.define(word, translation, options)
    })

program
    .command('definition <word>')
    .description('Translate a word from the original language to the user language.')
    .option('-r, --reverse', 'Gives you the word in the original language from the user language.')
    .action(function (word, options) {
        dictionary.definition(word, options)
    })

program
    .command('translate <file>')
    .description('Translates a file into the user language.')
    .option('-l, --language <language>', '.')
    .action(function (word, options) {
        dictionary.definition(word, options)
    })

program.parse(process.argv)
