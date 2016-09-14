<?php

/* default/layout.html.twig */
class __TwigTemplate_c1d5f891684b09a34340347521a589f2791f5729595ebc4c0c50b6d9c43c43a6 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        // line 1
        $this->parent = $this->loadTemplate("base.html.twig", "default/layout.html.twig", 1);
        $this->blocks = array(
            'body' => array($this, 'block_body'),
            'content' => array($this, 'block_content'),
        );
    }

    protected function doGetParent(array $context)
    {
        return "base.html.twig";
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $__internal_d57122be0764598c5352f207958a09a831e9b1e6f9f015a180d4bf079765ca9b = $this->env->getExtension("native_profiler");
        $__internal_d57122be0764598c5352f207958a09a831e9b1e6f9f015a180d4bf079765ca9b->enter($__internal_d57122be0764598c5352f207958a09a831e9b1e6f9f015a180d4bf079765ca9b_prof = new Twig_Profiler_Profile($this->getTemplateName(), "template", "default/layout.html.twig"));

        $this->parent->display($context, array_merge($this->blocks, $blocks));
        
        $__internal_d57122be0764598c5352f207958a09a831e9b1e6f9f015a180d4bf079765ca9b->leave($__internal_d57122be0764598c5352f207958a09a831e9b1e6f9f015a180d4bf079765ca9b_prof);

    }

    // line 3
    public function block_body($context, array $blocks = array())
    {
        $__internal_1984b6204ae259dee19f3472205d9118525f557f07535678eeb3127729ae23a0 = $this->env->getExtension("native_profiler");
        $__internal_1984b6204ae259dee19f3472205d9118525f557f07535678eeb3127729ae23a0->enter($__internal_1984b6204ae259dee19f3472205d9118525f557f07535678eeb3127729ae23a0_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "body"));

        // line 4
        echo "<p>layout</p>
\t";
        // line 5
        $this->displayBlock('content', $context, $blocks);
        
        $__internal_1984b6204ae259dee19f3472205d9118525f557f07535678eeb3127729ae23a0->leave($__internal_1984b6204ae259dee19f3472205d9118525f557f07535678eeb3127729ae23a0_prof);

    }

    public function block_content($context, array $blocks = array())
    {
        $__internal_c38b51882de3f85baf97961fa390f3799ba47368f37bb26c2219bd1dfbf69ca7 = $this->env->getExtension("native_profiler");
        $__internal_c38b51882de3f85baf97961fa390f3799ba47368f37bb26c2219bd1dfbf69ca7->enter($__internal_c38b51882de3f85baf97961fa390f3799ba47368f37bb26c2219bd1dfbf69ca7_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "content"));

        // line 6
        echo "\t";
        
        $__internal_c38b51882de3f85baf97961fa390f3799ba47368f37bb26c2219bd1dfbf69ca7->leave($__internal_c38b51882de3f85baf97961fa390f3799ba47368f37bb26c2219bd1dfbf69ca7_prof);

    }

    public function getTemplateName()
    {
        return "default/layout.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  56 => 6,  44 => 5,  41 => 4,  35 => 3,  11 => 1,);
    }
}
/* {% extends 'base.html.twig' %}*/
/* */
/* {% block body %}*/
/* <p>layout</p>*/
/* 	{% block content %}*/
/* 	{% endblock %}*/
/* {% endblock %}*/
