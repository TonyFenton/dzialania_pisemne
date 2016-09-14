<?php

/* default/homepage.html.twig */
class __TwigTemplate_e9d161fefd50ba58c5de5b9426f87e5554092b6b2ba550556de1ff186c542347 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        // line 1
        $this->parent = $this->loadTemplate("default/layout.html.twig", "default/homepage.html.twig", 1);
        $this->blocks = array(
            'content' => array($this, 'block_content'),
        );
    }

    protected function doGetParent(array $context)
    {
        return "default/layout.html.twig";
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $__internal_90d0f53079eae34462a2555d5dafd80440de496eab2e9d93730bd007299f45a7 = $this->env->getExtension("native_profiler");
        $__internal_90d0f53079eae34462a2555d5dafd80440de496eab2e9d93730bd007299f45a7->enter($__internal_90d0f53079eae34462a2555d5dafd80440de496eab2e9d93730bd007299f45a7_prof = new Twig_Profiler_Profile($this->getTemplateName(), "template", "default/homepage.html.twig"));

        $this->parent->display($context, array_merge($this->blocks, $blocks));
        
        $__internal_90d0f53079eae34462a2555d5dafd80440de496eab2e9d93730bd007299f45a7->leave($__internal_90d0f53079eae34462a2555d5dafd80440de496eab2e9d93730bd007299f45a7_prof);

    }

    // line 3
    public function block_content($context, array $blocks = array())
    {
        $__internal_a86cb87806976a09b125b7311f7d8effe8d621a56e09edb7035d3f6b3da8d833 = $this->env->getExtension("native_profiler");
        $__internal_a86cb87806976a09b125b7311f7d8effe8d621a56e09edb7035d3f6b3da8d833->enter($__internal_a86cb87806976a09b125b7311f7d8effe8d621a56e09edb7035d3f6b3da8d833_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "content"));

        // line 4
        echo "\t";
        echo twig_escape_filter($this->env, $this->getAttribute((isset($context["page"]) ? $context["page"] : $this->getContext($context, "page")), "name", array()), "html", null, true);
        echo "
";
        
        $__internal_a86cb87806976a09b125b7311f7d8effe8d621a56e09edb7035d3f6b3da8d833->leave($__internal_a86cb87806976a09b125b7311f7d8effe8d621a56e09edb7035d3f6b3da8d833_prof);

    }

    public function getTemplateName()
    {
        return "default/homepage.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  40 => 4,  34 => 3,  11 => 1,);
    }
}
/* {% extends 'default/layout.html.twig' %}*/
/* */
/* {% block content %}*/
/* 	{{ page.name }}*/
/* {% endblock %}*/
