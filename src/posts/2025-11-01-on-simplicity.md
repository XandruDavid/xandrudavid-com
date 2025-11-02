---
title: on simplicity
date: 2025-11-01
---

# On Simplicity

<note>This article is basically just the notes I wrote for a thundertalk I gave recently. It's not in a catchy blog form, and it tries to make more than one point. So bear with me through the first ever blog post I write.</note>

Some weeks ago I was messing around with a game dev engine and found a little .. *algorithm(?)* while trying to achieve something I don't remember.

I don’t want to spoil too much. I found the result *fascinating* and I imagined others might appreciate it too, so here we are.<br>
Let’s jump straight into code.

## Code walkthrough and demonstration
<!-- FIXME: translate this for blog post -->

<!-- 
  TODO: implement code visualization.
  Could the whole final code live in a separate repo and be imported here as a component? 
-->
- Show the code: isolate the algorithm part as much as possible.
- Show the black screen. Important to make the point of the code-visualise loop
- Render the dots.
- Render the lines.
- Ask: anyone has an idea of what will happen once I unpause it?

## Key points and lessons

I thought this was *so cool* and decided I wanted to share it. A thundertalk sounds like the best format, but about what? What is the talk about?<br>
Yeah, the result is cool, *but why?* Why do I find it so fascinating? And I think I found a few reasons, maybe even a few lessons:

### Curiosity, learning, and joy of discovery

When I found out about this I was *so immersed*. I watched hours of videos on similar topics (I still watch every video from [Sebastian Lague](https://www.youtube.com/@SebastianLague) as soon as he publishes).

I spent time coding outside of work, which I rarely do. I learned about different kinds of physics simulations, some data structures to optimise much more complex simulations, and even the basics of how to write low level procedures that can run on the GPU on hundreds of cores in parallel ([shaders](https://en.wikipedia.org/wiki/Shader)).

If you are lucky and your company gives you personal development time, or you just like coding in your free time, I suggest you focus on projects or topics that are not directly connected to the job you do the rest of the week.

Curiosity and discovery are key drivers in both professional and personal growth.


### Experimenting and visualisation

I loved the loop of writing code and instantly seeing it in action with a graphical UI. It showed me how much easier implementation and debugging gets when you build small visualisation tools, even simple text ones.

A great example is the React Hook Form [Dev Tools](https://react-hook-form.com/dev-tools) that allows you to see the complete state of your forms in real time as you interact with them.

If you can write a visualisation of what’s going on under the hood, complex systems become much easier to implement and debug.

### Simplicity and complexity, a.k.a. abstraction

We’ve seen how some concepts can be abstracted in a very simple way:

- adding gravitational acceleration
- conservation of momentum
- tension force

and how simple pieces can be combined into a very complex result. I believe the same simplicity is incredibly powerful in code and software architecture.

But the most important lesson, if there’s one thing I hope you take away from this post, is:
<mark>Don’t make the mistake of thinking</mark> that simple code will only have simple results, or *even worse*, <mark>that complex and rich results require complex implementation.</mark>
<!-- TODO: implement highlight style https://max.hn/blog/how-to-create-a-highlighter-marker-effect-in-css -->

Don’t be afraid when presented with a seemingly complex requirement! Usually it’s all about finding the correct abstractions to implement it using simple concepts.