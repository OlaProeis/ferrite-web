---
title: "The AI Development Workflow I Actually Use"
description: "A practical guide to building software with AI - from multiple AI perspectives to task management, fresh chats with handovers, and why strict compilers matter."
date: 2026-01-23
category: ai-workflow
readingTime: "8 min read"
tags: ["ai", "workflow", "productivity", "development"]
image: "/img/articles/task-master.png"
---

# The AI Development Workflow I Actually Use

I've been building software with AI for a while now. Multiple repos, different tech stacks, some failures, some shipped products. Along the way I've developed a workflow that actually works.

This isn't theory. It's what I landed on after trying a bunch of approaches that didn't work as well.

## The Problem With "Just Ask the AI"

When I started, I'd open a chat and describe what I wanted. Sometimes it worked. More often, I'd get code that almost worked, spend hours debugging, lose context when the chat got too long, and eventually start over.

The AI wasn't the problem. My process was.

I needed structure. A way to break down work, maintain context between sessions, and verify results without reading every line of code.

## The Workflow

### 1. Talk to Multiple AIs First

Before any code, I discuss the idea with different AI assistants. Claude for architecture. Perplexity for research on libraries and approaches. Sometimes Gemini for another perspective.

Each AI has blind spots. One suggests a library, another knows it has issues. One proposes an architecture, another spots why it won't scale. Five minutes getting multiple opinions saves hours later.

### 2. Create the PRD

Task Master needs a Product Requirements Document to generate tasks. This isn't just a formality, the quality of the PRD directly determines the quality of your tasks.

After the initial AI discussions, I ask one of the AIs to draft a PRD. It captures the problem, features, and specific acceptance criteria. "Add search" becomes a structured document with sections for keyboard shortcuts, UI behavior, edge cases, and technical considerations.

Then I run the PRD through other AIs for review. Claude might spot missing edge cases. Gemini might question an architectural decision. Perplexity might flag that a library I mentioned has known issues.

I iterate. Sometimes it's a quick tweak, sometimes a fundamental rethink. The PRD gets tighter with each pass.

Only when I'm confident in the spec do I feed it to Task Master. The time spent refining the PRD pays off immediately, the generated tasks are specific, sequenced correctly, and actually buildable.

The AI produces dramatically better code when it knows exactly what success looks like. A vague requirement creates vague tasks creates vague code. A tight PRD creates tight tasks creates code that works.

### 3. Break Work Into Tasks

![Task Master example](/img/articles/task-master.png)

Big features need to be broken down. I use Task Master (an MCP tool) to parse requirements and generate structured task lists with dependencies.

It turns a feature into a sequence of steps where each task has clear inputs, outputs, and ordering. The AI knows what to build first and what depends on what.

You don't need Task Master specifically. What matters is having explicit tasks rather than vague goals.

### 4. Feed the AI Current Documentation

AI models have training cutoffs. The library docs they know might be outdated. I use Context7 (another MCP tool) to pull current documentation into context.

This alone eliminates a category of bugs. No more "why doesn't this API exist" or "this method was deprecated." The AI works with accurate information.

### 5. Give the AI Project Context

Two files make a big difference in how well the AI writes code that fits your project.

**ai-context.md** is a lean architectural reference I keep under 100 lines. It tells the AI how to write code that fits the codebase: module structure, key types, language patterns, framework idioms, and critical gotchas that cause bugs. Not what to work on (that comes from handovers), but how to write code that belongs here.

![ai-context.md example](/img/articles/ai-context.png)

**index.md** is a documentation map. Every technical doc, organized by category, with one-line descriptions. When the AI needs to understand how something works, it can find the right doc fast instead of guessing or asking me.

These files pay for themselves quickly. The AI writes code that matches existing patterns instead of inventing new ones. It finds answers in the docs instead of hallucinating them.

### 6. Fresh Chats With Handovers

This was the biggest improvement to my workflow.

AI assistants don't remember previous sessions. Instead of fighting this, I lean into it. Each task gets a fresh chat. I paste in a handover document with exactly what's needed: rules, relevant files, the current task.

Why fresh chats? Context accumulates noise. Three tasks in, the AI references irrelevant stuff from earlier. Starting clean with a focused handover produces better results.

The handover cycle:

1. New chat, paste handover
2. Work on task until done
3. Paste the update-handover-prompt.md and the AI updates handover for next task
4. Close chat, repeat

I keep handovers minimal, but usually include some rules in the current-handover document, the one I paste into each chat with the task details. Only what the current task needs. No project overviews, no previous task details unless directly relevant.

![Handover rules example](/img/articles/current-handover-rules.png)

### 7. Test Everything Yourself

I don't read code line by line. I run the thing and see if it works.

Does the feature do what I asked? Does it handle edge cases? Does it break something else?

When something's wrong, I describe the problem. The AI debugs from there.

This division works well. The AI handles code quality. I handle product quality.

## Why Rust Works Well With AI

I've tried this workflow with different languages. Rust stands out.

The compiler is strict. Really strict. It catches whole categories of bugs before the code even runs. Memory issues, type mismatches, lifetime problems. The AI can write code, try to compile it, and get immediate feedback on what's wrong.

With dynamic languages, bugs hide until runtime. You run the code, hit an error, describe it to the AI, wait for a fix, run again. With Rust, the compiler tells the AI exactly what's broken and where. The feedback loop is tighter.

The AI also tends to write safer code in Rust because the language forces it. You can't accidentally forget error handling when the compiler won't let you ignore a `Result`. The guardrails are built in.

This doesn't mean Rust is the only option. But if you're building something substantial with AI, a language with a strict compiler is a real advantage.

## What Actually Matters

**Specificity in requirements.** Vague asks produce vague results. Time spent being specific pays off immediately.

**Task sizing.** With capable models like Claude Opus 4.5, I can handle full features in one session. With earlier or smaller models, break things into smaller chunks with handovers between. Both work, one is faster.

**Multiple perspectives.** Different AIs catch different problems. The second opinion is worth the extra minutes.

**The handover system.** Good context documents are the difference between productive sessions and frustrating ones. This took me the longest to figure out.

**Actually testing.** The AI will confidently say "this should work" when it doesn't. Trust but verify, every time.

## The Honest Downsides

AI misses edge cases humans would catch. It over-engineers sometimes. Maintaining handover documents takes effort.

There's also a skill to orchestrating this well. Knowing when to break tasks smaller, what context to include, how to describe bugs clearly. It develops over time.

## Do You Need to Be a Programmer?

I focus on what should be built and whether it works. The AI handles how.

Is that "programming"? I don't know. What I know is that this workflow ships working software that I couldn't have built otherwise.

## Try It

The core workflow:

1. Get multiple AI perspectives before starting
2. Write specific requirements
3. Break work into explicit tasks
4. Give the AI current documentation and project context
5. Use fresh chats with focused handovers
6. Test everything yourself

The specific tools matter less than the process. Structure your work, be specific, maintain context, verify results. The AI handles the rest.

## Resources

I've documented this workflow in detail with examples in the Ferrite repo. Check out `docs/ai-workflow/` if you want to see how this looks in practice or grab templates for your own projects.

---

*Originally published on [DEV Community](https://dev.to/olaproeis/the-ai-development-workflow-i-actually-use-549i)*
