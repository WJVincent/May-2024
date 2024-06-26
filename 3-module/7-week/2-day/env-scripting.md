# Core Utils and Env Scripting

- Why?
- Examples

## Why should you care about core utils?

- They are everywhere
  - If you need to work on a new computer or remote into a server core utils will be there
- They are powerful
  - Anything your computer can do, can be controlled directly via terminal programs
  - They are not restricted by the imagination of the developer who created your favorite GUI

## Purpose of this EOD

I cannot give a tutorial on how to use all of the many core utilities in 30m.

What I want to do in this EOD is introduce you to basic environment scripting.

You can modify little bits of your workflow one annoyance at a time and
end up with a highly personalized / useful dev environment down the line.

The examples here will be mostly personal annoyances that I have
scripted away over time.

Hopefully this gets you a little interested in the things you could
do to improve your own workflow!

## clear aliased to c

```sh
alias c='clear'
```

## git command aliasing

```sh
alias gst='git status'
alias ga='git add'
alias gp='git push'
alias gcmsg='git commit -m'
alias gco='git checkout'

function gpub {
    ga . && gcmsg "$1" && gp
}
```

## ls after cd

```sh
function cd {
    if [ -z "$1" ]; then
        builtin cd
    else
        builtin cd "$1"
    fi

    if [ $? -eq 0 ]; then
        ls
    fi
}
```

- override builtin cd
- if there are no arguments provided
  - call builtin cd with no arguments
- otherwise
  - call builtin cd with the argument
- if the exit status code `$?` equals 0
  - run ls

## cd after mkdir

```sh
function mcd {
    mkdir -p "$1"
    if [ $? -eq 0 ]; then
        cd "$1"
    fi
}
```

- mkdir and any necessary parent dirs with the first argument
- if the exit status code is 0 (successful) cd into the created dir

## fuzzy find + cd

```sh
alias sd="cd ~ && cd \$(find * -type d | fzf)"
```

- `cd ~`: cd to home dir before search
- `find * -type d`: searches for dirs recursively
- `| fzf`: pipe the output of find into fzf (not a core util, but a fantastic cli fuzzy finder)
- `cd \$(...)`: execute the command in the parens and then cd to the output

## Replace all occurences of var with let

### find basics

```sh
# find [path...] [options] [expression]

find . -name "*.js" # find everything that ends in js
find . -type d | head # find the first 10
```

### sed basics

```sh
# sed [options] command [input-file]

echo '123abc' | sed 's/[0-9]//g' # remove digits from input string
```

### example

```sh
find ./ -type f -exec sed -i 's/var/let/g' {} \;

```

- `find`: command to search for things
- `./`: starting directory to start searching for things
- `-type f`: option for the find command, look for regular files (not dirs)
- `-exec`: option for find command, execute the following command on the things returned from find
- `sed`: stream editor command, used to transform text
- `-i`: option for sed command, edit the files in place, modify files rather than printing output to the terminal
- `s/var/let/g`: substitution parameters, replace var with let globally
- `{}`: placeholder for find command, to represent each file that was found
- `\;`: the end of the command that find will execute on each file found

### make it reusable

```sh
function find_replace {
    find ./ -type f -name "*$1" -exec sed -i "s/$2/$3/g" {} \;
}

# usage find_replace js var let
# replace var with let in all js files in the current dir
```
