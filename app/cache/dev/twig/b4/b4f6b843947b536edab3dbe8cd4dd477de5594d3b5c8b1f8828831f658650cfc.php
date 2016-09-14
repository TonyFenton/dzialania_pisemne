<?php

/* default/page.html.twig */
class __TwigTemplate_ba89cff98d4eab4569ea0e152b5a35a9573b071e0d337fb6bef991631d9d275e extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        // line 1
        $this->parent = $this->loadTemplate("default/layout.html.twig", "default/page.html.twig", 1);
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
        $__internal_1a5915a9b07577d45c3049ed8cce1b88dc500f7251c388baf4f5c31df507a469 = $this->env->getExtension("native_profiler");
        $__internal_1a5915a9b07577d45c3049ed8cce1b88dc500f7251c388baf4f5c31df507a469->enter($__internal_1a5915a9b07577d45c3049ed8cce1b88dc500f7251c388baf4f5c31df507a469_prof = new Twig_Profiler_Profile($this->getTemplateName(), "template", "default/page.html.twig"));

        $this->parent->display($context, array_merge($this->blocks, $blocks));
        
        $__internal_1a5915a9b07577d45c3049ed8cce1b88dc500f7251c388baf4f5c31df507a469->leave($__internal_1a5915a9b07577d45c3049ed8cce1b88dc500f7251c388baf4f5c31df507a469_prof);

    }

    // line 3
    public function block_content($context, array $blocks = array())
    {
        $__internal_9a6987167a3247451859182a81229a9efd45ce7bd41747f16b1361d8bec04723 = $this->env->getExtension("native_profiler");
        $__internal_9a6987167a3247451859182a81229a9efd45ce7bd41747f16b1361d8bec04723->enter($__internal_9a6987167a3247451859182a81229a9efd45ce7bd41747f16b1361d8bec04723_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "content"));

        // line 4
        echo "\t";
        echo twig_escape_filter($this->env, $this->getAttribute((isset($context["page"]) ? $context["page"] : $this->getContext($context, "page")), "name", array()), "html", null, true);
        echo "
";
        
        $__internal_9a6987167a3247451859182a81229a9efd45ce7bd41747f16b1361d8bec04723->leave($__internal_9a6987167a3247451859182a81229a9efd45ce7bd41747f16b1361d8bec04723_prof);

    }

    public function getTemplateName()
    {
        return "default/page.html.twig";
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
